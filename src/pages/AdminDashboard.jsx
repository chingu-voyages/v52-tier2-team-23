import DataTable from "@/components/DataTable";
import mockData from "@/lib/mockdata";
import FilterSection from "@/components/FilterSection";

export default function AdminDashboard() {
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
      <FilterSection />
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
