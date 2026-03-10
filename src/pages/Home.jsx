import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div>
      <div className="flex">
      <div className="hidden sm:flex">
          <Sidebar></Sidebar>
      </div>

        <div className="w-full">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
