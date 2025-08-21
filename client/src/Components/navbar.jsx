import { Link } from "react-router-dom";
import { IoReorderThree, IoClose } from "react-icons/io5";
import Button from "./button";
import { useState } from "react";

const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "All Blogs", path: "/all-blogs" },
    { name: "Profile", path: "/profile" },
    { name: "Login", path: "/login" },
  ];

  const [hamburger, sethamburger] = useState(false);


  

  return (
    <nav className="relative flex justify-between items-center py-4 border-b border-zinc-300">
      <div>
        <Link to="/" className="text-2xl font-bold">
         <span className="text-[rgba(41,49,157,0.742)]">&#x3C0;</span> Blogs
        </Link>
      </div>
      <div className="sm:flex hidden gap-5 ">
        {links.map((item, index) => {
          return (
            <Link className="hover:font-semibold" key={index} to={item.path}>
              {item.name}
            </Link>
          );
        })}
        <div>
          <Button value="Sign Up" to="signup" />
        </div>
      </div>
      <div className="sm:hidden block text-3xl z-20">
        <button onClick={() => sethamburger(!hamburger)}>
          {hamburger ? <IoClose /> : <IoReorderThree />}
        </button>
      </div>
      <div
        className={`z-10 hamburger sm:hidden block fixed h-screen w-3/5 transition-all duration-300  top-0 ${
          hamburger ? "-right-7" : "-right-120 "
        }`}
      >
        <div className="hamburger-content flex flex-col items-center justify-evenly h-screen">
          <div onClick={()=> {sethamburger(!hamburger)}} className="flex flex-col items-center gap-4">
            {links.map((item, index) => {
            return (
              <Link className="hover:font-semibold border-b text-white" key={index} to={item.path}>
                {item.name}
              </Link>
            );
          })}
          </div>
          <div>
            <Button value="Sign Up" to="signup" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
