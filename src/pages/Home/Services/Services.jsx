
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faWifi,
    faNetworkWired,
    faBrain,
    faGlobe,
    faPhone
} from '@fortawesome/free-solid-svg-icons';
const Services = () => {
    const [expanded, setExpanded] = useState(false);

    const services = [
        {
            title: "Broadband Service",
            description: "Broadband service provides high-speed internet connectivity to users, allowing for faster data transmission and reliable internet access. It enables users to browse the web, stream media, download files, and engage in online activities seamlessly. With broadband service, users can enjoy a smooth and uninterrupted internet experience, whether for personal or business purposes.",
            icon: <FontAwesomeIcon color="#48bb78" icon={faWifi} />
        },
        {
            title: "Transmission Network",
            description: "A transmission network is a vital component of the telecommunications infrastructure. It encompasses the network infrastructure and technologies used to transmit data, voice, and video signals over long distances. Transmission networks employ various technologies such as fiber optics, microwave links, and satellite communication to ensure efficient and reliable transmission of information between different locations. These networks form the backbone of telecommunications systems and support the seamless transfer of data across vast geographical areas.",
            icon: <FontAwesomeIcon color="#48bb78" icon={faNetworkWired} />
        },
        {
            title: "Intelligent Networks",
            description: "Intelligent networks refer to advanced telecommunications networks that incorporate sophisticated features and capabilities. These networks are designed to provide enhanced services and intelligent routing of communications. Intelligent networks enable features such as call routing, call forwarding, voice recognition, and data integration. By leveraging intelligent network technologies, service providers can offer innovative services and personalized experiences to their customers.",
            icon: <FontAwesomeIcon color="#48bb78" icon={faBrain} />
        },
        {
            title: "International Gateway",
            description: "An international gateway is a crucial point of connection between different countries' telecommunications networks. It serves as the entry and exit point for international voice and data traffic. International gateways facilitate the exchange of information between networks across borders, enabling global communication and connectivity. These gateways play a significant role in enabling international voice calls, internet access, and data transfer between countries.",
            icon: <FontAwesomeIcon color="#48bb78" icon={faGlobe} />
        },
        {
            title: "IP phone",
            description: "An IP phone, also known as a VoIP (Voice over Internet Protocol) phone, uses internet connectivity to make voice calls. It converts voice signals into digital data and transmits them over an IP network, such as the internet. IP phones offer features like call forwarding, voicemail, conference calling, and more. They provide a cost-effective and flexible solution for voice communication, particularly for businesses and individuals seeking to leverage the advantages of internet-based telephony.",
            icon: <FontAwesomeIcon color="#48bb78" icon={faPhone} />
        },
        {
            title: "Wi-Fi",
            description: "Wi-Fi, short for Wireless Fidelity, refers to wireless networking technology that allows devices to connect to a local area network (LAN) wirelessly. It enables devices such as smartphones, laptops, and tablets to access the internet without the need for physical wired connections. Wi-Fi networks are commonly found in homes, offices, public spaces, and other locations, providing convenient and flexible internet connectivity to users within the network's range.",
            icon: <FontAwesomeIcon color="#48bb78" icon={faWifi} />
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
                                            {service.icon}
                                            <h3 className="text-lg ml-2 text-white font-semibold">{service.title}</h3>
                                        </div>
                                        <p className={`text-gray-700  ${expanded ? '' : 'truncate'}`}>
                                            {service.description}
                                        </p>
                                        {/* <div className="w-full flex justify-center mt-3 relative">
                                            <Link to='/ourServices'
                                                className="bg-gray-800 text-white py-1 px-2 rounded-lg transition-colors duration-300 hover:bg-gray-600 fixed bottom-2"
                                            >
                                                Go For Details
                                            </Link>
                                        </div> */}
                                    </div>
                                </div>
                            ))}
                            <Link to='/ourServices'
                                className="bg-gray-800 text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-600"
                            >
                                See More & Details Services
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default Services;
