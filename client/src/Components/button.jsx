import { Link } from "react-router-dom"
const Button = ({value, to}) => {
  return (
    <Link
        to={to}
        className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition-colors duration-200"
      >
        {value}
      </Link>
  )
}

export default Button