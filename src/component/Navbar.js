import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navWrap'>
            <nav className='navbar'>
                <h1 className='logo'>
                    <Link to='/'>
                        <span>Logo</span>
                    </Link>
                    </h1>
                <ul className='navbar-nav'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='MovieLink'>Movies</Link></li>
                    <li><Link to='Users'>Users</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;