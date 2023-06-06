import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenToggleProfile, setIsOpenToggleProfile] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const toggleProfile = () => {
        setIsOpenToggleProfile(!isOpenToggleProfile);
    };

    return (

        <nav className='bg-gray-800'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <button onClick={toggleMenu} tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </button>
                        {isOpen && <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link
                                to="/"
                                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Home
                            </Link></li>
                            <Link
                                to="/about"
                                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                About
                            </Link>
                            <li><Link
                                to="/ourServices"
                                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Our Services
                            </Link></li>
                            {/* <li><Link
                                to="#"
                                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Gallery
                            </Link></li> */}
                            <li><Link
                                to="#"
                                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Career
                            </Link></li>
                            <li><Link
                                to="/contact"
                                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Contact
                            </Link></li>

                        </ul>}
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">Bangla Network</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link
                            to="/"
                            className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Home
                        </Link></li>
                        <Link
                            to="/about"
                            className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            About
                        </Link>
                        <li><Link
                            to="/ourServices"
                            className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Our Services
                        </Link></li>
                        {/* <li><Link
                            to="#"
                            className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Gallery
                        </Link></li> */}
                        <li><Link
                            to="#"
                            className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Career
                        </Link></li>
                        <li><Link
                            to="/contact"
                            className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Contact
                        </Link></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <button onClick={toggleProfile} tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw" />
                            </div>
                        </button>
                        {isOpenToggleProfile && <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between">
                                    Profile
                                </Link>
                            </li>
                            <li><Link>Settings</Link></li>
                            <li><Link>Logout</Link></li>
                        </ul>}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;