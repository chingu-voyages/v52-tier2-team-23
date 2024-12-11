import DataTable from "@/components/DataTable";
import mockData from "@/lib/mockdata";
import FilterSection from "@/components/FilterSection";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { MapPin } from "lucide-react";
import { Download } from "lucide-react";
import { useState } from "react";

export default function AdminDashboard() {
  {
    /*const [number, setNumber] = useState(0);

  useEffect(() => {
    const totalPages = Math.ceil(data.length);
    setNumber(totalPages);
  }, [data]);*/
  }

  //Filter Modal
  const [openFilter, setOpenFilter] = useState(false);
  const handleFilterModal = () => {
    setOpenFilter(true);
  };

  const data = mockData;
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
        onClick={() => {
          handleFilterModal();
        }}
      >
        <Filter />
        Filter By
      </Button>
      {openFilter && <FilterSection />}

      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
