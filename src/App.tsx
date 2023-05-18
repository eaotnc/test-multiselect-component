import { Multiselect } from "multiselect-react-dropdown";
import { TableSelection } from "./Components/TableSelect";
import { PopOverToggle } from "./Components/PopOverToggle";
import { TableSort } from "./Components/SearchAbleTable";
import { data } from "./config";

const options = [
  { name: "Srigar", id: 1 },
  { name: "Sam", id: 2 },
  { name: "Sam3", id: 3 },
  { name: "Sam4", id: 4 },
];

function App() {
  return (
    <div className="App">
      {/* <Multiselect
        showCheckbox={true}
        options={options} // Options to display in the dropdown
        selectedValues={(e: any) => console.log(e)} // Preselected value to persist in dropdown
        onSelect={(e) => console.log(e)} // Function will trigger on select event
        onRemove={(e) => console.log(e)} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
      /> */}
      <PopOverToggle />
      <TableSort data={data} />
    </div>
  );
}

export default App;
