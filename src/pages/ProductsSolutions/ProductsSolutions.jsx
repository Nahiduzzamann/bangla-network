import React from 'react';

const ProductsSolutions = () => {
    return (
        <div className=" min-h-screen mt-20">
            <div className="container mx-auto py-12">
                <h1 className="text-4xl font-bold text-center mb-8">Products & Solutions</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Local Communication Networks</h2>
                        <p className="mb-4">
                            We offer comprehensive solutions for planning, installing, operating, providing, and maintaining local communication networks.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">National & International Communication Networks</h2>
                        <p className="mb-4">
                            Our expertise extends to national and international communication networks, ensuring seamless connectivity across borders.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Basic/Fixed Line Service</h2>
                        <p className="mb-4">
                            We provide reliable and efficient basic/fixed line services for both residential and business customers.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Cellular/Mobile Service</h2>
                        <p className="mb-4">
                            Our cellular/mobile services ensure high-quality mobile connectivity, enabling communication on the go.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Wireless Service</h2>
                        <p className="mb-4">
                            We offer advanced wireless services, leveraging the latest technologies to deliver reliable wireless connectivity.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Audio & Video Conferencing Service</h2>
                        <p className="mb-4">
                            Our audio and video conferencing services enable seamless collaboration and communication across distances.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Private Switching Network Services</h2>
                        <p className="mb-4">
                            We provide secure and efficient private switching network services to facilitate internal communication within organizations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsSolutions;
