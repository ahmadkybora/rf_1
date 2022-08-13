import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Search } from '../../utils/tools';

const Navbar = () => {
    const { fullName, isAdmin } = "";
    return (
        <nav className="bg-gray-200 flex">
          <Link className="flex-1" to="/">Home</Link>
          { ( isAdmin === "true" ) && (
              <NavLink className="flex-1" to="/panel/dashboard">
                Panel
              </NavLink>
          )}

          <div className="flex-auto w-100">
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
              <div className='flex-end'>
                <NavLink className="flex-initial bg-green-100 rounded border-double border-2" to="/login">
                  Login
                </NavLink>
                <NavLink className="flex-initial bg-green-100 rounded border-double border-2" to="/register">
                  Register
                </NavLink>
              </div>
            </React.Fragment>
          )}
          { fullName && (
            <React.Fragment>
              <div className='flex-auto'>
                <NavLink className="" to="/profile">
                    {fullName}
                </NavLink>

                <NavLink className="" to="/logout">
                    Logout
                </NavLink>
              </div>
            </React.Fragment>
          )}
      </nav>
    )
}

export default Navbar;