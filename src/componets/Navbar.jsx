import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { byPrefixAndName } from '@awesome.me/bars/icons'

const Navbar = () => {
    return (
        <div className="py-5 px-5 bg-orange-500 border-b-2 border-gray-400">
           <div className="flex items-center">
             <div>
                <h1 className="text-4xl font-extrabold text-white">Client<span className="text-black">Flow</span></h1>
            </div>
            <div className="mx-auto">
                <ul className="hidden sm:flex gap-10 font-semibold  text-white">
                    <li className="cursor-pointer hover:text-amber-300 bg-emerald-800 py-2 px-3 rounded-xl hover:bg-fuchsia-900">Dashboard</li>
                    <li className="cursor-pointer hover:text-amber-300 bg-emerald-800 py-2 px-3 rounded-xl hover:bg-fuchsia-900">Clients</li>
                    <li className="cursor-pointer hover:text-amber-300 bg-emerald-800 py-2 px-3 rounded-xl hover:bg-fuchsia-900">Add Client</li>
                    <li className="cursor-pointer hover:text-amber-300 bg-emerald-800 py-2 px-3 rounded-xl hover:bg-fuchsia-900">Settings</li>
                 </ul>
            </div>
              <div className="lg:hidden">
             <FontAwesomeIcon icon={byPrefixAndName.fas['bars']} />
             <FontAwesomeIcon icon={byPrefixAndName.fas['bars']} />
                
              </div>
            <div className=" hidden sm:flex w-16 h-16 bg-blue-800 rounded-full">
              {/* logo */}
             </div>
           </div>
           

        </div>
    )
}

export default Navbar
