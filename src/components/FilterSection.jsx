import { Button } from "./ui/button";
import { Slider } from "@/components/ui/slider";
import { TravelMenu } from "./ui/travelmenu";
import AddressDropdown from "./ui/address-dropdown";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Filter, X } from "lucide-react";

function FilterSection() {
  //Close Filter modal
  /*const [closeFilterModal, setCloseFilterModal] = useState(true);
  const handleCloseFilterModal = () => {
    setCloseFilterModal(false);
  };*/
  return (
    <div className="filter-section flex justify-center items-center">
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <Card className="filer-section-card  w-80  md:w-96 ">
          <div className="filter-modal-exit flex justify-end pt-2 pr-2">
            <X className="w-6" onClick={""} />
          </div>

          <CardHeader>
            <CardTitle className="flex flex-row gap-1">
              <Filter /> Filter By
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-evenly">
            <div className="distance-box">
              <h2>Distance from City Hall</h2>
              <Slider className="w-40" defaultValue={[33]} max={100} step={1} />
            </div>
            <div className="traffic-time-box">
              <h2>Travel Time</h2>
              <TravelMenu />
            </div>
            <div className="street-address-box">
              <h2>Street Address</h2>
              <AddressDropdown />
            </div>
            <div className="filter-buttons flex flex-row justify-between">
              <Button> Clear Filter</Button>
              <Button>Apply Filter</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default FilterSection;
