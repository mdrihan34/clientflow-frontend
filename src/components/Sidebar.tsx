import { NavLink } from "react-router";
import sideIcon from "../../public/sideIcon.png";
const Sidebar = () => {
  return (
    <div className="min-h-screen bg-amber-800 w-96">
      <div>
        <div className="pb-4 border-b-2 border-gray-400">
          <img className="w-40 mx-auto" src={sideIcon} alt="side icon" />
        </div>
        <div className="mt-2">
          <ul>
            <NavLink to={'dashboard'}>
              <li className="pl-4 cursor-pointer py-2 text-lg font-semibold bg-cyan-600 text-white border-b-2 border-t-2 border-amber-600 hover:bg-black ">
                Dashboard
              </li>
            </NavLink>
            <NavLink to={'/client'}>
           
              <li className="pl-4 cursor-pointer py-2 text-lg font-semibold bg-cyan-600 text-white border-b-2  border-amber-600 hover:bg-black ">
                Client
              </li>
            </NavLink>
            <NavLink to={'/add-client'}>
           
              <li className="pl-4 cursor-pointer py-2 text-lg font-semibold bg-cyan-600 text-white border-b-2  border-amber-600 hover:bg-black ">
                Add Client
              </li>
            </NavLink>
            <NavLink to={'/setting'}>
              
              <li className="pl-4 cursor-pointer py-2 text-lg font-semibold bg-cyan-600 text-white border-b-2  border-amber-600 hover:bg-black ">
                Settings
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
