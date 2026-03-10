import { FaFolderOpen ,FaDollarSign  } from "react-icons/fa";
import { FaUserGroup ,FaClipboardList } from "react-icons/fa6";
import AddClientForm from "../components/AddClientForm";



const Dashboard = () => {
    return (
        <div className=" pl-10  mt-10">
            <div className="flex gap-10">
                <div className="bg-green-900 text-white  p-5 rounded-2xl">
                  <h3 className="font-semibold text-xl">Total Client</h3>
                <div className="flex items-center gap-2">
                    <FaUserGroup />
                    <p className="text-amber-200 text-xl font-bold">+0</p>

                </div>
                </div>
                <div className="bg-amber-900 text-white  p-5 rounded-2xl">
                  <h3 className="font-semibold text-xl">Active Project</h3>
                <div className="flex items-center gap-2">
                    <FaFolderOpen />
                    <p className="text-amber-200 text-xl font-bold">+0</p>

                </div>
                </div>
                <div className="bg-blue-800 text-white  p-5 rounded-2xl">
                  <h3 className="font-semibold text-xl">Pending Task</h3>
                <div className="flex items-center gap-2">
                    <FaClipboardList  />
                    <p className="text-amber-200 text-xl font-bold">+0</p>

                </div>
                </div>
                <div className="bg-cyan-700 text-white  p-5 rounded-2xl">
                  <h3 className="font-semibold text-xl">Monthly Revenue</h3>
                <div className="flex items-center gap-2">
                    <FaDollarSign  />
                    <p className="text-amber-200 text-xl font-bold">+0</p>

                </div>
                </div>

            </div>
        <AddClientForm></AddClientForm>
        </div>
    )
}

export default Dashboard
