import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

    };
    return (
        <div className=" min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
                    <h1 className='text-center text-4xl font-bold mb-5'>Contact Us</h1>
                    <h1 className="text-2xl font-bold mb-4">Office Address</h1>
                    <div className="text-center">
                        <p className="text-lg">SJS Freelanching and IT Institute</p>
                        <p className="text-lg">Khandakar Lodge, House-65</p>
                        <p className="text-lg">Road-2, RK Road</p>
                        <p className="text-lg">Islambag, Rangpur</p>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-lg font-bold">Contact Information</h2>
                        <p className="mt-2">Phone: 01713337752</p>
                        <p className="mt-2">Email: info@example.com</p>
                        <div className="mt-4">
                            <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mr-2">Facebook</a>
                            <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mr-2">Twitter</a>
                            <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Instagram</a>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-lg font-bold">Location</h2>
                        <div className="mt-2">
                            <iframe
                                title="Google Maps"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.4853462408682!2d89.22863257600258!3d25.754527808900363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e3334011188799%3A0x41b90776fb5f041!2sSJS%20Kallyan%20Foundation!5e0!3m2!1sen!2sbd!4v1685954381956!5m2!1sen!2sbd"
                                width="100%"
                                height="300"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>
                        </div>
                    </div>
                    <div className=''>

                        <div>
                            <div className=" min-h-screen py-8">
                                <div className="container mx-auto px-4">
                                    <div className="max-w-2xl mx-auto bg-gray-500 text-white rounded-lg shadow-lg p-6">
                                        <h1 className='text-3xl mt-10 text-center mb-10 text-white'>
                                            Obtaining further information by make a contact with our experienced IT staffs.
                                        </h1>
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-4">
                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="name">Name</label>
                                                <input
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:bg-gray-200 focus:text-black focus:outline-none focus:shadow-outline"
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    placeholder="Enter your name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="email">Email</label>
                                                <input
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:bg-gray-200 focus:text-black focus:outline-none focus:shadow-outline"
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Enter your email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="subject">Subject</label>
                                                <input
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:bg-gray-200 focus:text-black focus:outline-none focus:shadow-outline"
                                                    type="text"
                                                    name="subject"
                                                    id="subject"
                                                    placeholder="Enter the subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="message">Message</label>
                                                <textarea
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:bg-gray-200 focus:text-black focus:outline-none focus:shadow-outline h-32 resize-none"
                                                    name="message"
                                                    id="message"
                                                    placeholder="Enter your message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                            <div className="flex justify-center">
                                                <button
                                                    type="submit"
                                                    className="bg-white text-gray-500 hover:bg-gray-200 text-gray-00 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                >
                                                    Send Message
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
