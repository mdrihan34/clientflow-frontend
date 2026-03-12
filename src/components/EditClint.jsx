import { useForm } from "react-hook-form"

const EditClint = () => {
    const {register, handleSubmit,reset,  formState: { errors }} = useForm()
        const onSubmit =  (data)=>{
        console.log(data)
        }
    return (
         <div>
                <h2 className='text-center text-2xl font-bold mb-2'>Update Client</h2>
                <form className='border-t-2 p-5' onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className='block text-lg font-semibold' htmlFor="">Name</label>
                        <input
                        {...register('ClientName', {required:'Please input your name'}) } placeholder='Enter your name' className=' w-full rounded-xl  py-2 px-4 border-blue-700 border'
                         type="text" />
                    </div>
                    <div>
                        <label className='block text-lg font-semibold' htmlFor="">Email</label>
                        <input
                        {...register('email', {required:'Please input your name'}) } placeholder='Enter your email' className=' w-full rounded-xl  py-2 px-4 border-blue-700 border'
                         type="email" />
                    </div>
                    <div>
                        <label className='block text-lg font-semibold' htmlFor="">Company</label>
                        <input
                        {...register('company', {required:'Please input your name'}) } placeholder='Enter your company' className=' w-full rounded-xl  py-2 px-4 border-blue-700 border'
                         type="text" />
                    </div>
                    <button className='w-full bg-emerald-800 text-white font-bold text-center hover:bg-blue-700 py-4 rounded-xl mt-4' type='submit'>
                        Update
                    </button>
                    <button className='w-full bg-red-900 text-white font-bold text-center hover:bg-blue-700 py-4 rounded-xl mt-4' type='submit'>
                        Delete
                    </button>


                </form>
            </div>
    )
}

export default EditClint
