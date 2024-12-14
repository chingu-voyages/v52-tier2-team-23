import DataTable from "@/components/DataTable";
import mockData from "@/lib/mockdata";
import FilterSection from "@/components/FilterSection";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { MapPin } from "lucide-react";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import useFetchApiAddress from "@/api/useFetchApiAddress";

export default function AdminDashboard() {
  {
    /*Page numbers : const [number, setNumber] = useState(0);

  useEffect(() => {
    const totalPages = Math.ceil(data.length);
    setNumber(totalPages);
  }, [data]);*/
  }

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
  return (
    <>
      <h1>Admin Dashboard</h1>
      <Button className="export-button" variant="outline">
        <Download />
        Export
      </Button>
      <Button className="map-view-button" variant="outline">
        <MapPin />
        Map View
      </Button>

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
        <DataTable columns={columns} data={mappedData} />
      </div>
    </>
  );
}
