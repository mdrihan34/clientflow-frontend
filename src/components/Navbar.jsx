// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { byPrefixAndName } from '@awesome.me/bars/icons'

import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="py-2 px-5 bg-orange-500 border-b-2 border-gray-400 w-full h-20">
      <div className="flex items-center">
        <div>
          <h1 className="text-4xl font-extrabold text-white">
            Client<span className="text-black">Flow</span>
          </h1>
        </div>
        <div className="mx-auto">
          <ul className="hidden sm:flex gap-10 font-semibold  text-white">
         <NavLink to='dashboard'><li className="cursor-pointer hover:text-amber-300 bg-emerald-800 py-2 px-3 rounded-xl hover:bg-fuchsia-900">
              Dashboard
            </li></NavLink>
           <NavLink to='client'>
             <li className="cursor-pointer hover:text-amber-300 bg-emerald-800 py-2 px-3 rounded-xl hover:bg-fuchsia-900">
              Clients
            </li>
           </NavLink>
            <NavLink to='add-client'>
              <li className="cursor-pointer hover:text-amber-300 bg-emerald-800 py-2 px-3 rounded-xl hover:bg-fuchsia-900">
              Add Client
            </li>
            </NavLink>
            <NavLink to='setting'>
              <li className="cursor-pointer hover:text-amber-300 bg-emerald-800 py-2 px-3 rounded-xl hover:bg-fuchsia-900">
              Settings
            </li>
            </NavLink>
          </ul>
        </div>
        <div className="lg:hidden">
          {/* <FontAwesomeIcon icon={byPrefixAndName.fas['bars']} />
             <FontAwesomeIcon icon={byPrefixAndName.fas['bars']} /> */}
        </div>
        <div className=" hidden sm:flex w-16 h-16 bg-blue-800 rounded-full">
          {/* logo */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
