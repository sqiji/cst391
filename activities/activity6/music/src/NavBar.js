import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <span className='navbar-brand' href='#'>My Music</span>
            <button className='navbar-toggler' type='button' data-toggle='collapse'
                data-target='#navbarNavAltMarup' aria-controls='navbarNavAltMarup'
                aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavAltMarup'>
                    <div className='navbar-nav'>
                        <span className='nav-item nav-link' href='#'>
                            <Link to='/'>Main</Link>
                        </span>
                        <span className='nav-item nav-link' href='#'>
                            <Link to='/new'>New</Link>
                        </span>
                    </div>
                </div>
        </nav>
    );
};

export default NavBar;