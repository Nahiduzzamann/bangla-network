import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-8 mt-10 lg:mt-24 ">
            <div className="container mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-4 md:ml-0">
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Bangla Network</h3>
                        <p className="text-gray-300 mb-4">
                            Our system provides a comprehensive range of communication and telecommunication services, including basic/fixed line, cellular/mobile, wireless. By choosing our survices, you gain access to a wide range of services, cutting-edge technology, and tailored solutions.
                        </p>
                        <p className="text-gray-300 mb-4">
                            <strong>Contact:</strong> +8801713337752
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">What We Do?</h3>
                        <ul className="text-gray-300">
                            <li className="mb-2">
                                <Link to="/ourServices" className="hover:text-gray-400">
                                    Communication and Telecommunication Networks
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/ourServices" className="hover:text-gray-400">
                                    Broadband Services and Data Transmission                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/ourServices" className="hover:text-gray-400">
                                    IP Phone, WIFI, and Internet Services                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/ourServices" className="hover:text-gray-400">
                                    Integrated Solutions and Information Systems                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/ourServices" className="hover:text-gray-400">
                                    Information Technology Services and Emerging Technologies                                </Link>
                            </li>
                            <li>
                                <Link to="/ourServices" className="hover:text-gray-400">
                                    Outsourcing Services and Equipment Manufacturing                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                        <div className="flex items-center">
                            <a href="https://www.facebook.com/people/SJS-Freelancing-It-Instituted/100092527967098/" target='blank' className="text-gray-300 hover:text-gray-400 mr-4">
                                <FaFacebook />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-gray-400 mr-4">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-gray-400 mr-4">
                                <FaLinkedin />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-gray-400">
                                <FaInstagram />
                            </a>

                        </div>
                        <div className="mt-4 mb-4">
                            <Link to='/contact' className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded">
                                Send Message
                            </Link >
                        </div>
                    </div>
                </div>
                <small className='ml-4'>© 2023 Bangla Network. All Rights Reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;
