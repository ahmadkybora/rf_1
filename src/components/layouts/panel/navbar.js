import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Search } from '../../../utils/tools';

const Navbar = () => {
    const { fullName, isAdmin } = "";

    return (
        <nav className="">
          <Link className="navbar-brand" to="/">Home</Link>
          { ( isAdmin === "true" ) && (
              <NavLink className="nav-item nav-link text-success" to="/panel/dashboard">
                Panel
              </NavLink>
          )}

          <div className="">
              <Search 
                type={["search", "submit"]} 
                name={["search", ""]} 
                className={["form-control col-md-12", "btn btn-success"]} 
                id={["search", ""]} 
                value={["", ""]} 
                placeholder="Search ..." 
              />
          </div>

          { !fullName && (
            <React.Fragment>
              <NavLink className="nav-item nav-link " to="/login">
                Login
              </NavLink>
              <NavLink className="nav-item nav-link " to="/register">
                Register
              </NavLink>
            </React.Fragment>
          )}
          { fullName && (
            <React.Fragment>
              <NavLink 
                className="nav-item nav-link fa fa-shopping-cart text-success" 
                to="/logout"
              >
              </NavLink>

              <NavLink className="nav-item nav-link" to="/profile">
                  {fullName}
              </NavLink>

              <NavLink className="nav-item nav-link text-danger" to="/logout">
                  Logout
              </NavLink>
            </React.Fragment>
          )}
      </nav>
    )
}

export default Navbar;