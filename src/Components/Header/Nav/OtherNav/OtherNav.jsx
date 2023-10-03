import React, { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./nav.css";
import { AuthContext } from "../../../../AuthContext/AuthContext";
import { signOut } from "firebase/auth";
import auth from "../../../../firebase/firebase";

const OtherNav = ({ home }) => {
  const authContext = useContext(AuthContext);
  const { user,setUser } = authContext;
  function logOut(){
    signOut(auth).then(() => {
      setUser(null)
    }).catch((error) => {
      // An error happened.
    });
  }
  const li = user ? (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/donation"}
          end
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Donation
        </NavLink>
      </li>
            <li>
        <NavLink
          to={"/statistics"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <a onClick={logOut}>Logout</a>
      </li>
    </>
  ) : (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/signup"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Signup
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/login"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Login
        </NavLink>
      </li>
    </>
  );
  const location = useLocation();
  return (
    <>
      <div className="z-[100] w-full h-fit">
        <div
          className={`navbar justify-between bg-${
            home ? "transparent" : "white"
          }`}
        >
          <div className="navbar-start">
            <img
              className="w-[100px]"
              src="https://i.ibb.co/y4r5078/Logo-min.png"
              alt=""
            />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{li}</ul>
          </div>
          <div className="navbar-end contents lg:hidden">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu right-0 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {li}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherNav;
