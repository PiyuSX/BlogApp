import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Signup = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  return (
    <div className='flex h-screen justify-center items-center'> 
      <form className='relative flex h-[50vh] justify-center items-center flex-col gap-3 px-20 rounded-xl bg-[rgba(41,49,157,0.742)]'  onSubmit={handleSubmit(onSubmit)}>
        <h1 className='text-2xl font-semibold text-white'>SignUp</h1>
      <input className='w-94 px-2 bg-white rounded py-4' type="text" {...register("userName", { required: true })} />
      <input className='w-94 px-2 bg-white rounded py-4' type="email" {...register("email", { required: true })} />
      <input className='w-94 px-2 bg-white rounded py-4' type="password" {...register("password", { required: true })} />
      <input type="submit" value="SignUp" className='bg-black text-white w-full px-5 py-2 rounded hover:bg-gray-800 transition-colors duration-200' />
      <div className='absolute bottom-4 flex gap-2 justify-center items-center'>
      <h1 className='text-white'>Already a user?</h1>
      <Link className='text-black' to="/login">SignIn</Link>
      </div>
    </form>
    </div>
  )
}

export default Signup