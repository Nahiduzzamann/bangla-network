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
    const handleDropdown = () => {
        setIsOpen(false);
    };

    const toggleProfile = () => {
        setIsOpenToggleProfile(!isOpenToggleProfile);
    };

    const handleLogout = () => {
        logOut()
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch((error) => console.log(error.message));
    };

    const [proPic, setProPic] = useState('https://i.ibb.co/0Q4M1MX/blank-img.jpg');
    // profile img check
    function checkImageValidity(url) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true); // Image loaded successfully
            img.onerror = () => resolve(false); // Image failed to load
            img.src = url;
        });
    }

    if (user) {
        // Usage example
        const imageUrl = user.photoURL;
        checkImageValidity(imageUrl)
            .then((isValid) => {
                if (isValid) {
                    setProPic(user.photoURL);
                }
            })
            .catch((error) => console.error('Error occurred:', error));
    }

    return (
        <nav className="bg-black bg-opacity-50 fixed top-0 left-0 right-0 z-50 shadow-lg">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <div
                            onClick={toggleMenu}
                            tabIndex={0}
                            className="btn btn-ghost lg:hidden text-red-500"
                            role="button"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        {isOpen && (
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-gray-900"
                            >
                                <li className="text-white  hover:bg-gray-700 px-3 py-2 rounded-md lgxedium">
                                    <NavLink onClick={handleDropdown} to="/">Home</NavLink>
                                </li>
                                <li className="text-white  hover:bg-gray-700 px-3 py-2 rounded-md lgxedium">
                                    <NavLink onClick={handleDropdown} to="/about">About</NavLink>
                                </li>
                                <li className="text-white  hover:bg-gray-700 px-3 py-2 rounded-md lgxedium">
                                    <NavLink onClick={handleDropdown} to="/ourServices">Our Services</NavLink>
                                </li>
                                <li className="text-white  hover:bg-gray-700 px-3 py-2 rounded-md lgxedium">
                                    <NavLink onClick={handleDropdown} to="missionVision">Mission & Vision</NavLink>
                                </li>
                                <li className="text-white  hover:bg-gray-700 px-3 py-2 rounded-md lgxedium">
                                    <NavLink onClick={handleDropdown} to="productsSolutions">
                                        Products & Solutions
                                    </NavLink>
                                </li>
                                <li className="text-white  hover:bg-gray-700 px-3 py-2 rounded-md lgxedium">
                                    <NavLink onClick={handleDropdown} to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        )}
                    </div>
                    <Link className="btn btn-ghost text-white normal-case text-xl">
                        Bangla Network
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="text-white  hover:bg-gray-700 py-2 rounded-md text-lg ">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="text-white  hover:bg-gray-700 py-2 rounded-md text-lg ">
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li className="text-white  hover:bg-gray-700 py-2 rounded-md text-lg ">
                            <NavLink to="/ourServices">Our Services</NavLink>
                        </li>
                        <li className="text-white  hover:bg-gray-700 py-2 rounded-md text-lg ">
                            <NavLink to="/missionVision">Mission & Vision</NavLink>
                        </li>
                        <li className="text-white  hover:bg-gray-700 py-2 rounded-md text-lg ">
                            <NavLink to="/productsSolutions">
                                Products & Solutions
                            </NavLink>
                        </li>
                        <li className="text-white  hover:bg-gray-700 py-2 rounded-md text-lg ">
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <>
                            <div className="dropdown dropdown-end">
                                <div
                                    onClick={toggleProfile}
                                    tabIndex={0}
                                    className="btn btn-ghost btn-circle avatar"
                                    role="button"
                                >
                                    <img
                                        src={proPic}
                                        alt=""
                                        className="h-8 w-8 rounded-full"
                                    />
                                </div>
                                {isOpenToggleProfile && (
                                    <ul
                                        tabIndex={0}
                                        className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                                    >
                                        {/* <li>
                      <Link className="justify-between">
                        Profile
                      </Link>
                    </li>
                    <li><Link>Settings</Link></li> */}
                                        <li>
                                            <button onClick={handleLogout}>Logout</button>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                            <Link
                                to="login"
                                className="text-white  hover:bg-gray-700 px-3 py-2 rounded-md lgxedium"
                            >
                                Log In
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
