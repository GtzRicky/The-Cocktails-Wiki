import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <Link to="/">
                    <img src="https://image.flaticon.com/icons/png/512/38/38706.png" alt="cocktail db logo" className="logo" />
                </Link>
                <h1 className="nav-title">The Cocktail DB</h1>
                <ul className="nav-links">
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar