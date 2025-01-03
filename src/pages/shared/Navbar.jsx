import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import logo from '../../../public/jobs.png';

const Navbar = () => {

  const {user, userSignOut} = useContext(AuthContext)

  const links = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/myapplications'}>My Applications</NavLink>
      </li>
      <li>
        <NavLink to={'/addJob'}>Add A Job</NavLink>
      </li>
      <li>
        <NavLink to={'/mypostedjobs'}>My Posted Jobs</NavLink>
      </li>
      
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
          <img src={logo} alt="" />
          <h3 >Jobs Portal</h3>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {
            user ? <><button onClick={()=> userSignOut()} className="btn">Log Out</button></> :
              <><Link to={"/register"}>Register</Link>
            <Link to={"/signIn"}>
              <button className="btn">Sign In</button>
            </Link></>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
