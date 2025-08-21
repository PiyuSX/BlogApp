import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Login = () => {

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
        <h1 className='text-2xl font-semibold text-white'>Login</h1>
      <input className='box-border bg-white rounded w-94 px-2 py-4' type="email" {...register("email", { required: true })} />
      <input className='box-border bg-white rounded w-94 px-2 py-4' type="password" {...register("password", { required: true })} />
      <input type="submit" value="SignUp" className='bg-black text-white w-full px-5 py-2 rounded hover:bg-gray-800 transition-colors duration-200' />
      <div className='absolute bottom-4 flex gap-3 justify-center items-center'>
      <h1 className='text-white'>New here?</h1>
      <Link className='text-black' to="/signup">SignUp</Link>
      </div>
    </form>
    </div>
  )
}

export default Login