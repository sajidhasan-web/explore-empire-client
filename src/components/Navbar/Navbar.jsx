import { Link, NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from "../../providers/FirebaseProvider";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [theme, setTheme] = useState('light')
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
        toast.success("User signed out successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };


  useEffect(()=>{
    localStorage.setItem('theme', theme)
   const localTheme = localStorage.getItem('theme');
   document.querySelector('html').setAttribute('data-theme', localTheme)


  },[theme])

  const handleToggle =(e) => {
      e.target.checked ? setTheme('dim') : setTheme('light')
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
            <li>
              <NavLink
                to={"/myListPage"}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 dark:border-white flex items-center px-4 -mb-1"
                    : "flex items-center px-4 -mb-1"
                }
              >
                My List Page
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex gap-5 items-center">
        <div>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
              onChange={handleToggle}
                type="checkbox"
              />

              {/* sun icon */}
              <svg
                className="swap-off fill-current w-10 h-10 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on fill-current w-10 h-10 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        <div className="hidden lg:flex">
          
          {user ? (
            <div className="space-x-3 flex items-center">
              <div className="avatar">
                <div
                  className="w-12"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user?.displayName || "unknown"}
                  data-tooltip-place="left"
                >
                  <Tooltip id="my-tooltip" />
                  <img
                    className="rounded-full"
                    src={
                      user?.photoURL ||
                      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                  />
                </div>
              </div>
              <button
                onClick={handleSignOut}
                className="btn btn-md bg-transparent hover:opacity-90 hover:text-[#0D6EFD] text-white font-bold border border-white"
              >
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
      </div>
      {/* <div className={`lg:hidden bg-blue-400 transition-transform delay-400 h-screen  ${showSidebar ? 'absolute top-22 right-0' : 'absolute hidden translate-x-60'}`}>
            this is sidebar
          </div> */}
      <div
        className={`lg:hidden z-10 bg-blue-400 transition-transform delay-400 h-screen  w-1/2 p-3 ${
          showSidebar
            ? "absolute top-22 right-0"
            : "absolute hidden translate-x-60"
        } transition-all duration-300`}
      >
        <div>
          <div className=" flex p-3 justify-center space-y-5 flex-col items-center border-b border-b-white">
            <div className="w-20">
              <img
                className="rounded-full"
                src={
                  user?.photoURL ||
                  "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                }
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
