import MapView from "@/components/MapView";
import FilterSection from "@/components/FilterSection";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { MapPin, TableProperties } from "lucide-react";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import useFetchApiAddress from "@/api/useFetchApiAddress";
import DataTable from "@/components/DataTable";
import mockData from "@/lib/mockdata";

export default function AdminDashboard() {
 
  //Filter Modal
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const { addressData } = useFetchApiAddress();
  const [mappedData, setMappedData] = useState([]);

  const openFilterModal = () => {
    setIsFilterModalOpen(true);
  };

  const closeFilterModal = () => {
    setIsFilterModalOpen(false);

  };
  useEffect(() => {
    const exportedAddressInfo = (address) => {
      return {
        houseNumber: address.hse_nbr,
        streetName: address.str_nm,
        streetSuffix: address.str_sfx_cd,
        zipCode: address.zip_cd,
      };
    };

    if (addressData && addressData.length > 0) {
      const updatedData = mockData.map((customer) => {
        const randomAddress =
          addressData[Math.floor(Math.random() * addressData.length)];
        const transformedAddress = exportedAddressInfo(randomAddress);
        const fullAddress = `${transformedAddress.houseNumber} ${transformedAddress.streetName} ${transformedAddress.streetSuffix} ${transformedAddress.zipCode}`;
        return { ...customer, address: fullAddress };
      });
      setMappedData(updatedData);
    }
  }, [addressData]);

  //const data = mockData;
  const columns = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "address",
      header: "Address",
    },
    {
      accessorKey: "date",
      header: "Date Requested",
    },
    {
      accessorKey: "time",
      header: "Time Requested",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
  ];

  const [showMap, setShowMap] = useState(false);

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

      <Button
        className="filter-button"
        variant="outline"
        onClick={openFilterModal}
      >
        <Filter />
        Filter By
      </Button>
      {isFilterModalOpen && (
        <FilterSection onClosedFilterModal={closeFilterModal} />
      )}

      <div className="container mx-auto py-10">
        {/* Conditionally render either the MapView or DataTable */}
        {showMap ? <MapView /> : <DataTable columns={columns} data={data} />}

      </div>
    </>
  );
}
