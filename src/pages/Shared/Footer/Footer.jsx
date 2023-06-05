import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-8 mt-10 lg:mt-24 ">
            <div className="container mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-4 md:ml-0">
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Bangla Network</h3>
                        <p className="text-gray-300 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget felis at nunc
                            dignissim bibendum. Aenean tristique nulla vitae tristique cursus.
                        </p>
                        <p className="text-gray-300 mb-4">
                            <strong>Contact:</strong> 123-456-7890
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">What We Do?</h3>
                        <ul className="text-gray-300">
                            <li className="mb-2">
                                <Link to="/ourServices" className="hover:text-gray-400">
                                    Web Application Development
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/ourServices" className="hover:text-gray-400">
                                    Mobile Application Development
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/ourServices" className="hover:text-gray-400">
                                    Software Security
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/ourServices" className="hover:text-gray-400">
                                    Wordpress Development
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/ourServices" className="hover:text-gray-400">
                                    E-Commerce Development
                                </Link>
                            </li>
                            <li>
                                <Link to="/ourServices" className="hover:text-gray-400">
                                    UI/UX Development
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                        <div className="flex items-center">
                            <a href="#" className="text-gray-300 hover:text-gray-400 mr-4">
                                <FaFacebook />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-gray-400 mr-4">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-gray-400">
                                <FaInstagram />
                            </a>
                        </div>
                        <div className="mt-4">
                            <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
                <small>© 2023 Bangla Network. All Rights Reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;
