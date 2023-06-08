
const About = () => {
    return (
        <div className="container mx-auto">
            <div className="uppercase text-white mt-4">
                <h3 className="text-center text-3xl">
                    THE COMPANIES ACT, 1994 <br />
                    (ACT XVIII OF 1994) <br />
                    A PRIVATE COMPANY
                    LIMITED BY SHARES <br />
                    MEMORANDUM OF ASSOCIATION <br />
                    OF
                </h3>
                <h2 className="text-center text-4xl font-bold">
                    BANGLA NETWORK LTD.
                </h2>
            </div>
            <div className="text-white mt-8 text-lg ml-4">
                <p>
                    I. &nbsp;&nbsp;The name of the company is BANGLA NETWORK LTD. <br />
                    II. &nbsp;The registered office of the company shall be situated in Bangladesh. <br />
                </p>
                <div className="overflow-x-auto">
                    <div className=" py-12">
                        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/2 px-4">
                                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                                <ul className="list-disc list-inside">
                                    <li>Plan, Install, Operate, Provide, and Maintain all types of local, national, and international communication and telecommunication networks.</li>
                                    <li>Offer basic/fixed line service, cellular/mobile service, wireless service, audio and video conferencing service.</li>
                                    <li>Provide private switching network services.</li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2 px-4">
                                <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
                                <p className="mb-4">With years of experience, our team is skilled in:</p>
                                <ul className="list-disc list-inside">
                                    <li>Network planning and design</li>
                                    <li>Installation and deployment</li>
                                    <li>Operation and maintenance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;