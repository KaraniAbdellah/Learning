import "./App.css";
import Person from "./Component/Person";
import Admin from "./Component/Admin";
import User from "./Component/User";
import { DashboardContext } from "./Context/DashboardContext";
import Dashboard from "./Component/Dashboard";

function App() {
  return (
    <>
      {/* Defining Props in Typescript */}
      {/* <Person name={"Abdellah"} age={20} isMarried={false} />
      <Person name={"Abdellah"} age={20} isMarried={false} />
      <Person name={"Abdellah"} age={20} isMarried={false} />
      <Person name={"Abdellah"} age={20} isMarried={false} /> */}

      {/* Hooks using Typescript */}
      {/* <Admin></Admin> */}

      {/* Contexts using TypeScript */}
      <User></User>
      <DashboardContext.Provider value={undefined}>
        <Dashboard></Dashboard>
      </DashboardContext.Provider>
    </>
  );
}

export default App;
