import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  console.log(showSidebar);
  return (
    <div>
      <div className="flex justify-between items-center bg-[#0D6EFD] p-5">
        <div>
          <h1 className="text-3xl font-bold text-white opacity-90">
            Lets Tour
          </h1>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-5 text-white">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink>About</NavLink>
            </li>
            <li>
              <NavLink>Contact</NavLink>
            </li>
            <li>
              <NavLink>Login</NavLink>
            </li>
            <li>
              <NavLink>Register</NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex">
          <button className="btn btn-sm md:btn-md lg:btn-lg bg-transparent hover:opacity-90 hover:text-[#0D6EFD] text-white font-bold border border-white">
            login
          </button>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setShowSidebar(!showSidebar)} className="btn">
            {showSidebar ? (
              <RxCross2 size={25}></RxCross2>
            ) : (
              <IoMdMenu size={25}></IoMdMenu>
            )}
          </button>
        </div>
      </div>
      {/* <div className={`lg:hidden bg-blue-400 transition-transform delay-400 h-screen  ${showSidebar ? 'absolute top-22 right-0' : 'absolute hidden translate-x-60'}`}>
            this is sidebar
          </div> */}
      <div
        className={`lg:hidden bg-blue-400 transition-transform delay-400 h-screen  w-1/2 p-3 ${
          showSidebar
            ? "absolute top-22 right-0"
            : "absolute hidden translate-x-60"
        } transition-all duration-300`}
      >
        <div>
           <div className="flex p-3 justify-center space-y-5 flex-col items-center border-b border-b-white">
               <div className="w-24">
                <img className="rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
               </div>
               <h4>Md. Sajid Hasan</h4>
           </div>
          
        </div>
        <ul className="space-y-2 mt-3 flex flex-col items-center">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
