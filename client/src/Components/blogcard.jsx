import Button from "./button"

const Blogcard = ({ img, title, description }) => {
  return (
    <div className='my-10 flex md:flex-row flex-col md:gap-10 gap-3'>
        <div className='md:w-2/4'>
            <img className='w-full rounded-lg' src={img} alt={title} />
        </div>
      <div className='w-full flex flex-col md:gap-6 gap-3'>
        <h3 className='text-xl font-semibold'>{title}</h3>
        <p className='text-gray-600'>{description.slice(0, 350)}...</p>
        <div>
        <Button value="Read More" to="/blog" />
        </div>
      </div>
    </div>
  )
}

export default Blogcard