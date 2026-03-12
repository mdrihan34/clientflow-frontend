import { useState } from "react"
import { FaPen } from "react-icons/fa";
import EditModel from "../components/EditModel";

const Client = () => {
    const [clients,setClinenta] = useState([
         {
            id: 1,
        name:'Ismail',
        email: 'ismail@gmail.com',
        company: 'mernify',
        status: 'pending'
    }
    ])
    console.log(clients)
  
  
    return (
        <div>
           <div>
            <table className="w-[90%] sm:w-[80%] mx-auto mt-10 lg:p-5 rounded-t-2xl overflow-hidden">
                <thead className="  h-11  sm:text-center  bg-gray-200    text-black  sm:text-xl">
                    <tr className=" ">
                        <th> Name</th>
                        <th>Email</th>
                        <th>Company</th>
                        <th>Status</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody className=" bg-amber-300 sm:font-semibold h-10  gap-9">
                    
                       {
                        clients.map(client=>{
                          
                           return(
                             <tr className=""  key={client.id}>
                             <td className="text-center px-4 py-2">{client.name}</td>
                        <td className="text-center px-4 py-2">{client.email}</td>
                        <td className="text-center px-4 py-2">{client.company}</td>
                        <td className="text-center px-4 py-2">{client.status}</td>
                        <td className="text-center px-4 py-2 "><EditModel></EditModel></td>
                        </tr>
                           )
                            
                         
                        })
                       }
                    
                </tbody>
            </table>
           </div>
        
        </div>
    )
}

export default Client
