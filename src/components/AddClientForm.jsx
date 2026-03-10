import { useForm } from 'react-hook-form';

const AddClientForm = () => {
    const {register, handleSubmit,reset,  formState: { errors }} = useForm()
    const onSubmit =  (data)=>{
    console.log(data)
    }
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className='block' htmlFor="">Name</label>
                        <input
                        {...register('ClientName', {required:'Please input your name'}) } placeholder='Enter your name' className='border-2'
                         type="text" />
                    </div>
                    <div>
                        <label className='block' htmlFor="">Email</label>
                        <input
                        {...register('email', {required:'Please input your name'}) } placeholder='Enter your email' className='border-2'
                         type="email" />
                    </div>
                    <div>
                        <label className='block' htmlFor="">Company</label>
                        <input
                        {...register('company', {required:'Please input your name'}) } placeholder='Enter your company' className='border-2'
                         type="text" />
                    </div>
                    <button type='submit'>
                        Submit
                    </button>

                </form>
            </div>
        </div>
    )
}

export default AddClientForm
