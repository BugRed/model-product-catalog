import React from "react";
import { Link, NavLink } from 'react-router-dom'
import "./styles.scss"

const Navbar = () => (
    <nav className="row bg-primary main-nav">
        <div className="col-2">
            <Link to="/" className="nav-logo-text">
            <h4>Catalog</h4>
            </Link>
        </div>
        <div className="col-6 offset-2">
            <ul className="main-menu">
            <li>
                <NavLink end to="/" className={({ isActive }) => isActive ? 'active' : 'deactivate'}>
                    HOME
                </NavLink>
            </li>
            <li>
                <NavLink end to="/products" className={({ isActive }) => isActive ? 'active' : 'deactivate'}>
                    CATÁLOGO
                </NavLink>
            </li>
            <li>
                <NavLink end to="/admin" className={({ isActive }) => isActive ? 'active' : 'deactivate'}>
                    ADMIN
                </NavLink>
            </li>
            </ul>
        </div>
    </nav>

);
export default Navbar;