import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className="container-fluid">
                <span className='navbar-brand' href='#'>Car  Show</span>
                <button className='navbar-toggler' type='button' data-toggle='collapse'
                    data-target='#navbarNavDropdown' aria-controls='navbarNavDropdown'
                    aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Main</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/new">Add Car</Link>
                            </li>
                        </ul>
                    </div>
                </div>
        </nav>
    );
};

export default NavBar;