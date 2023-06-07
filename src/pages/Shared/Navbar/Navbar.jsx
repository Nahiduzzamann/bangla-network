import React, { useContext, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenToggleProfile, setIsOpenToggleProfile] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const toggleProfile = () => {
        setIsOpenToggleProfile(!isOpenToggleProfile);
    };
    const handleLogout = () => {
        logOut()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error.message))
    }

    return (

        <nav className='bg-gray-800'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <button onClick={toggleMenu} tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </button>
                        {isOpen && <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'>
                                <NavLink
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                                <NavLink
                                    to="/about"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                                <NavLink
                                    to="/ourServices"

                                >
                                    Our Services
                                </NavLink>
                            </li>
                            {/* <li><NavLink
                                to="#"
                                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Gallery
                            </NavLink></li> */}
                            <li className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                                <Link
                                    to="#"

                                >
                                    Career
                                </Link>
                            </li>
                            <li className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                                <NavLink
                                    to="/contact"
                                >
                                    Contact
                                </NavLink>
                            </li>

                        </ul>}
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">Bangla Network</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"><NavLink
                            to="/"
                        >
                            Home
                        </NavLink></li>
                        <li className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                            <NavLink
                                to="/about"

                            >
                                About
                            </NavLink>
                        </li>

                        <li className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                            <NavLink
                                to="/ourServices"

                            >
                                Our Services
                            </NavLink></li>
                        {/* <li><Link
                            to="#"
                            className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Gallery
                        </Link></li> */}
                        <li className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                            <Link
                                to="/"

                            >
                                Career
                            </Link>
                        </li>
                        <li className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                            <NavLink
                                to="/contact"

                            >
                                Contact
                            </NavLink>
                        </li>

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        
                        user ?
                            <>
                                <div className="dropdown dropdown-end">
                                    <button onClick={toggleProfile} tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <img src={user.photoURL || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} alt="Picture" className="h-8 w-8 rounded-full" />
                                    </button>
                                    {isOpenToggleProfile && <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <Link className="justify-between">
                                                Profile
                                            </Link>
                                        </li>
                                        <li><Link>Settings</Link></li>
                                        <li><button onClick={handleLogout}>Logout</button></li>
                                    </ul>}
                                </div>
                            </>
                            :
                            <>
                                <Link to='login' className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Log In</Link>
                            </>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;