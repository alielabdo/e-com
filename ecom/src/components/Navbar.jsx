import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import ward from "../assets/ward.png";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { useSearchDetails } from "../context/searchDetails";

const Navbar = () => {
  let location = useLocation();
  const { setSearch } = useSearchDetails();

  const customLink = 'hover:bg-violet-600 hover:text-white transition-colors rounded-lg py-1 px-2'

  function searchOn() {
    if (location.pathname === "/details")
      return (
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      );
  }
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href="/">
          E-COM
        </a>
      </div>

      <button><CustomLink to="/cart" className="mx-2 hover:bg-violet-600 hover:text-white transition-colors p-4 rounded-lg">Cart</CustomLink></button>
      <CustomLink to="/about" className="mx-2 hover:bg-violet-600 hover:text-white transition-colors p-4 rounded-lg">About</CustomLink>

      <div className="flex-none gap-2">
        {searchOn()}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={ward} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            
            <a className={customLink} href="/profile">
              Profile
              <span className="ml-[88px] badge">New</span>
            </a>
            
            <CustomLink className={customLink}
            to="/cart">
              Cart
            </CustomLink>
            <CustomLink className={customLink} 
            to="/login">
              Login
            </CustomLink>
            <CustomLink
            className={customLink} 
            to="/signup">
              Signup
            </CustomLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
const CustomLink = ({ className,to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <div className={className}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}

export default Navbar;