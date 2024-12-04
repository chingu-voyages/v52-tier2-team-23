import { Filter } from "lucide-react";

Filter;

function FilterSection() {
  return (
    <div className="filter-box border-box w-full h-20 p-6 border rounded-2xl border-gray-200">
      <h2>Filter By</h2>
      <div className="distance-toggle"></div>
    </div>
  );
}

export default FilterSection;
