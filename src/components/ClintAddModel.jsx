import { useState } from "react"
import Model from "./Model"
import AddClientForm from "./AddClientForm"

const ClintAddModel = () => {
    const [isModalOpen , setIsModalOpen] = useState(false)
    return (
        <div className="p-10 overflow-hidden">
            <button className="bg-rose-700 py-2 px-5 rounded-2xl text-white" onClick={()=>setIsModalOpen(true)}>Add Client</button>
            <Model isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)}>
                <AddClientForm></AddClientForm>
            </Model>
        </div>
    )
}

export default ClintAddModel
