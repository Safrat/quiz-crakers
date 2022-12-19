import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold">Quizy <span className='text-danger'>Solver</span></a>
                    <div>
                        <Link to='/'>Topics</Link>
                        <Link to='/statastics'>Statastics</Link>
                        <Link to='/blogs'>Blogs</Link>

                    </div>
                </div>
            </nav>
            <nav>


            </nav>

        </div>
    );
};

export default Header;