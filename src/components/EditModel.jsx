import { useState } from "react"

import Model from "./Model"
import EditClint from "./EditClint"
import { FaPen } from "react-icons/fa";
const EditModel = () => {
   const [isModal, setIsmodal] = useState(false)
    return  (
        <div className=" overflow-hidden">
            <button className="bg-lime-500 text-black text-lg rounded-full cursor-pointer p-2" onClick={()=>setIsmodal(true)}><FaPen /></button>
            <Model isOpen={isModal} onClose={()=>setIsmodal(false)}>
            <EditClint></EditClint>
            </Model>
        </div>
    )
}

export default EditModel
