import { useEffect, useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import MapView from "@/components/MapView";
import { Button } from "@/components/ui/button";
import { MapPin, TableProperties, Download } from "lucide-react";
import useFetchApiAddress from "@/api/useFetchApiAddress";
import DataTable from "@/components/DataTable";
import mockData from "@/lib/mockdata";

// Column definitions for DataTable
const COLUMNS = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "address", header: "Address" },
  { accessorKey: "date", header: "Date Requested" },
  { accessorKey: "time", header: "Time Requested" },
  { accessorKey: "status", header: "Status" },
];

// Function to transform address data
const exportedAddressInfo = (address) => ({
  houseNumber: address.hse_nbr,
  streetName: address.str_nm,
  streetSuffix: address.str_sfx_cd,
  zipCode: address.zip_cd,
});

export default function AdminDashboard() {
  const [optimizedSchedule, setOptimizedSchedule] = useState([]);
  const [directionsResult, setDirectionsResult] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const { addressData } = useFetchApiAddress();

  // Load Google Maps API using useJsApiLoader
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, // Replace with your Google Maps API Key
    libraries: ["places"],
  });

  // Function to optimize customer schedule based on directions result
  const getOptimizedSchedule = (result, fullCustomerInfoList) => {
    const optimizedOrder = result.routes[0].waypoint_order;
    const sortedCustomers = [...fullCustomerInfoList].sort((a, b) => {
      const timeA = new Date(`1970/01/01 ${a.time}`);
      const timeB = new Date(`1970/01/01 ${b.time}`);
      return timeA - timeB;
    });
    return optimizedOrder.map((index) => sortedCustomers[index]);
  };

  // Function to get optimized route using Google Maps API
  const getOptimizedRoute = (fullCustomerInfoList) => {
    if (!window.google) {
      console.error("Google Maps API is not loaded.");
      return;
    }

    const origin = "200 N Spring St. Los Angeles, CA 90012";
    const waypoints = fullCustomerInfoList.map((customer) => ({
      location: customer.address,
      stopover: true,
    }));

    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin,
        destination: origin,
        waypoints,
        optimizeWaypoints: true,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          const optimizedSchedule = getOptimizedSchedule(
            result,
            fullCustomerInfoList
          );
          setDirectionsResult(result);
          setOptimizedSchedule(optimizedSchedule);
        } else {
          console.error("Directions request failed due to: " + status);
        }
      }
    );
  };

  // Effect to fetch and process address data
  useEffect(() => {
    if (!isLoaded || loadError) return;

    if (addressData && addressData.length > 0) {
      const fullCustomerInfoList = mockData.map((customer) => {
        const randomAddress =
          addressData[Math.floor(Math.random() * addressData.length)];
        const transformedAddress = exportedAddressInfo(randomAddress);
        const fullAddress = `${transformedAddress.houseNumber} ${transformedAddress.streetName} ${transformedAddress.streetSuffix} ${transformedAddress.zipCode}`;
        return { ...customer, address: fullAddress };
      });
      getOptimizedRoute(fullCustomerInfoList);
    }
  }, [isLoaded, loadError, addressData]);

  if (loadError) return <div>Error loading Google Maps</div>;
  if (!isLoaded) return <div>Loading Google Maps...</div>;

  return (
    <>
      <h1 className="text-xl font-bold p-4 text-center">Admin Dashboard</h1>
      <Button className="export-button" variant="outline">
        <Download />
        Export
      </Button>

      {/* Conditionally render the Map View button */}
      {!showMap && (
        <Button
          className="map-view-button"
          variant="outline"
          onClick={() => setShowMap(true)}
        >
          <MapPin />
          Map View
        </Button>
      )}

      {/* Conditionally render the Data View button */}
      {showMap && (
        <Button
          className="data-table-view"
          variant="outline"
          onClick={() => setShowMap(false)}
        >
          <TableProperties />
          Data View
        </Button>
      )}

      <div className="container mx-auto py-10">
        {/* Conditionally render either the MapView or DataTable */}
        {showMap ? (
          <MapView directionsResult={directionsResult} />
        ) : (
          <DataTable columns={COLUMNS} data={optimizedSchedule} />
        )}
      </div>
    </>
  );
}
