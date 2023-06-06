
import { useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
    const [expanded, setExpanded] = useState(false);

    const services = [
        {
            title: "Communication and Telecommunication Networks",
            description: "To plan, install, operate, provide and maintain all types of local, national and international communication and telecommunication networks, systems, services, including but not limited to basic/fixed line services, cellular/mobile services, wireless services, satellite services and other telephony or communications services, value added voice, video and data services, new business services related thereto, message relay, facsimile, electronic mail services, television, tele-computing, telematics, audio and video conferencing services, maritime and aeronautical communication services, paging, video text, audio text, voice mail, data systems, private switching network services, leased line communication services.",
        },
        {
            title: "Broadband Services and Data Transmission",
            description: "To carry on the Business of broadband services, transmission networks of all types including computer networks, intelligent networks, globally managed data networks, international gateway networks and related services, data transmission, information technology enabled and related services, cloud services, managed services, customer care centers, customer relationship management, multimedia services, data center services, whether separately or converged together, and to procure all such licenses, authorizations, sanctions, Registrations, approvals and permissions from the relevant authorities as may be required from time to time for provision and carrying out of such services, activities and businesses, and to secure any renewals, extensions for all such licenses, authorizations, sanctions, registrations, approvals and permissions.",
        },
        {
            title: "IP Phone, WIFI, and Internet Services",
            description: "To carry on the business of IP phone, WIFI, Internet sale, Connection and customers service, all IP phone, Internet, WIFI connection of District Upazila and Union level. Installation of wireless towers at District Upazila and Union Level, Importer of all types IP Phone, wifi and internet based goods. Providing walkie-talkie connections, importation, sale, and services for different categories of offices and companies. internet service provider and to provide, render or make available and operate, sell, export, import, trade, maintain, improve, repair, service, research, develop all kinds of services and to provide services in respect of and relating to bandwidth, hosting of websites, broadcasting, content delivery, internet telephony, over-the-top (OTT) services, telecommunications or wireless communications through internet or any other electronic media, and deal or trade in accessories, assemblies, apparatus, spares, hardware and software for such services.",
        },
        {
            title: "Integrated Solutions and Information Systems",
            description: "To carry on all kinds of end to end integrated solutions involving information systems, developing, designing, marketing of communication platforms), with features and functionality including those related to social, commerce, messaging, communication, gaming and other online services, cloud hosted business platforms and computer and web based application products, systems, peripherals and materials, software packages and applications, client server applications, and to undertake the business of system and network integration, development and management, product application and development, computer maintenance and technical support services, internet access, networking and electronic media, telecommunication and web commerce application services and any combination thereof, and to set up, implement, sell and provide other telecommunication, information technology and related businesses as may evolve with advancement or changes in technology.",
        },
        {
            title: "Information Technology Services and Emerging Technologies",
            description: "To carry on the business of providing information technology services in the digital space and other emerging technologies including but not limited to enterprise search, data capability, data mining, data analytics, enterprise mobility, system administration, web software engineering, enterprise solutions, managed security solutions, information management including B2B, ecommerce and m-commerce (mobile commerce), business information and other applications, risk management, communication management, network management, facilitation of electronic transactions as well as other internet related services, system integration, intelligent networks, multi-media, enterprise resource planning, electronic communication, client service technologies & solutions, automation systems & processes, Internet of Things (IoT) related products & systems, artificial intelligence technology & systems.",
        },
        {
            title: "Outsourcing Services and Equipment Manufacturing",
            description: "To carry on the business of providing outsourcing services for all processes, sub Processes, activities and all other work performed by business in various industries within Bangladesh and across the world. To manufacture, buy, purchase, hire-purchase, acquire, assemble, repair, design, alter, develop, improve, exchange, let on hire, export, import, sell, re-sell, and deal in all sorts of equipment, plant & machineries, accessories, assemblies, apparatus, instruments, devices, spares, components, parts, sub-parts, tools, goods, articles, hardware and software required for or in furtherance of the business activities of the Company.",
        },
    ];
    return (
        <div>
            <h3 className="text-center text-4xl mt-10 lg:mt-24 text-gray-600">Our Services</h3>
            <h2 className="text-center text-lg mb-7 mt-4 text-white">We create a dynamic business impact with our innovative and intuitive solutions for all your digital essentials.</h2>
            <div>
                <div className="bg-gray-600 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-wrap justify-center">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className={`w-full md:w-1/2 lg:w-1/3 p-4 ${expanded ? '' : 'h-48'}`}
                                >
                                    <div className="p-6 bg-gray-400 rounded-lg shadow hover:bg-gray-900 hover:shadow-lg transform hover:scale-110 transition-all duration-500 h-full overflow-hidden">
                                        <div className="flex items-center mb-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 mr-2 text-blue-500"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                />
                                            </svg>
                                            <h3 className="text-lg text-white font-semibold">{service.title}</h3>
                                        </div>
                                        <p className={`text-gray-700 ${expanded ? '' : 'truncate'}`}>
                                            {service.description}
                                        </p>
                                        <div className="w-full flex justify-center mt-3 relative">
                                            <Link to='ourServices'
                                                className="bg-gray-800 text-white py-1 px-2 rounded-lg transition-colors duration-300 hover:bg-gray-600 fixed bottom-2"
                                            >
                                                Go For Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Services;
