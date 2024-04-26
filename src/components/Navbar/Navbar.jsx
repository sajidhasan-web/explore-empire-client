import { Link, NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from "../../providers/FirebaseProvider";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { user, logOut} = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
    .then(result => {
        console.log(result.user);
        toast.success('User signed out successfully')
    })
    .catch(error => {
        toast.error(error.message)
    })
  }
  

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
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 dark:border-white flex items-center px-4 -mb-1"
                    : "flex items-center px-4 -mb-1"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/addTouristsSpot"}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 dark:border-white flex items-center px-4 -mb-1"
                    : "flex items-center px-4 -mb-1"
                }
              >
                Add Tourists Spot
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/allTouristsSpot"}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 dark:border-white flex items-center px-4 -mb-1"
                    : "flex items-center px-4 -mb-1"
                }
              >
                All Tourists Spot
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex">
          {user ? (
            <div className="space-x-3 flex items-center">
              <div className="avatar">
                <div
                  className="w-12"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user?.displayName || "unknown"}
                  data-tooltip-place="top"
                >
                  <Tooltip id="my-tooltip" />
                  <img
                    className="rounded-full"
                    src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
                  />
                </div>
              </div>
              <button onClick={handleSignOut} className="btn btn-md bg-transparent hover:opacity-90 hover:text-[#0D6EFD] text-white font-bold border border-white">
                LogOut
              </button>
            </div>
          ) : (
            <div className="space-x-2">
              <Link to={"/login"}>
                 <button className="btn  btn-md bg-transparent hover:opacity-90 hover:text-[#0D6EFD] text-white font-bold border border-white">
                  login
                </button>
            </Link>
            <Link to={"/register"}>
                 <button className="btn  btn-md bg-transparent hover:opacity-90 hover:text-[#0D6EFD] text-white font-bold border border-white">
                  register
                </button>
             </Link>
            </div>
          )}
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
            <div className="w-20">
              <img
                className="rounded-full"
                src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
              />
            </div>
            <h4>{user?.displayName}</h4>
          </div>
        </div>
        <ul className="space-y-2 mt-3 flex flex-col items-center">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>Register</NavLink>
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
