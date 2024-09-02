import AllTask from "./components/AllTasks";
import CreateTask from "./components/CreateTask";
import Navbar from "./components/Navbar";
// import { Outlet } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <CreateTask />
        <AllTask />
      </BrowserRouter>
    </>
  );
}

export default App;
