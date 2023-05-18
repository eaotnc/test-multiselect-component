import { Multiselect } from "multiselect-react-dropdown";
import { TableSelection } from "./TableSelect";

const options = [
  { name: "Srigar", id: 1 },
  { name: "Sam", id: 2 },
  { name: "Sam3", id: 3 },
  { name: "Sam4", id: 4 },
];
const data = [
  {
    id: "1",
    avatar: "",
    name: "Robert Wolfkisser",
    email: "rob_wolf@gmail.com",
    job: "Engineer",
  },

  {
    id: "2",
    avatar: "",
    name: "Jill Jailbreaker",
    email: "jj@breaker.com",
    job: "Engineer",
  },
  {
    id: "3",
    avatar: "",
    name: "Henry Silkeater",
    email: "henry@silkeater.io",
    job: "Designer",
  },
  {
    id: "4",
    avatar: "",
    name: "Bill Horsefighter",
    email: "bhorsefighter@gmail.com",
    job: "Designer",
  },
  {
    id: "5",
    avatar: "",
    name: "Jeremy Footviewer",
    email: "jeremy@foot.dev",
    job: "Manager",
  },
];

function App() {
  return (
    <div className="App">
      <Multiselect
        showCheckbox={true}
        options={options} // Options to display in the dropdown
        selectedValues={(e: any) => console.log(e)} // Preselected value to persist in dropdown
        onSelect={(e) => console.log(e)} // Function will trigger on select event
        onRemove={(e) => console.log(e)} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
      />
      <TableSelection data={data} />
    </div>
  );
}

export default App;
