import { createPortal } from "react-dom";
import { IoIosCloseCircle } from "react-icons/io";

const Model = ({isOpen, onClose, children}) => {
    if(!isOpen) return null
    return createPortal(
        <div className="fixed inset-0 backdrop-blur-sm flex justify-center">
            <div className="bg-white p-6 mt-10 h-[30rem]  rounded-2xl shadow-xl relative w-96">
                <button onClick={onClose} className="absolute cursor-pointer text-red-500 text-2xl top-2 right-2">
                    <IoIosCloseCircle  />

                </button>
                {children}
            </div>
            
        </div>,
        document.getElementById('modal-root')
        
    )
}

export default Model
