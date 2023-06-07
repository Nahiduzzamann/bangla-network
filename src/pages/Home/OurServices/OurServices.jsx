
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWifi,
  faNetworkWired,
  faBrain,
  faGlobe,
  faPhone,
  faShoppingCart,
  faHeadset,
  faBroadcastTower,
  faWalking,
  faBuilding,
  faTools,
  faFlask,
  faServer,
  faFile,
  faVideo,
  faSatelliteDish,
  faCogs
} from '@fortawesome/free-solid-svg-icons';

const OurServices = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const data = [
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
        {
          title: "Internet Sale",
          description: "Internet sale involves the provision of internet connectivity and related services to customers. It includes offering various internet plans, packages, and subscriptions to meet different users' needs. Internet service providers (ISPs) facilitate internet sales, enabling individuals, businesses, and organizations to access and utilize internet services for communication, information access, entertainment, and other online activities.",
          icon: <FontAwesomeIcon color="#48bb78" icon={faShoppingCart} />
        },
        {
          title: "Connection & Customer Service",
          description: "Connection and customer service are essential aspects of telecommunications service delivery. Establishing reliable connections between users and the telecommunications network is crucial to ensure seamless communication and data transmission. Additionally, providing excellent customer service is vital for addressing user queries, resolving issues, and maintaining a positive user experience. Effective customer service ensures that users receive prompt assistance, seamless connectivity, and satisfactory resolution of any service-related matters. It plays a vital role in ensuring customer satisfaction and maintaining strong relationships with clients.",
          icon: <FontAwesomeIcon color="#48bb78" icon={faHeadset} />
        },
        {
          title: "Wireless Towers at District",
          description: "Wireless towers located in districts or populated areas serve as key infrastructure for wireless communication networks. These towers, often equipped with antennas and equipment, facilitate the transmission and reception of wireless signals. By strategically placing wireless towers in districts, service providers can ensure extensive network coverage and offer reliable wireless communication services to residents, businesses, and institutions within the area.",
          icon: <FontAwesomeIcon color="#48bb78" icon={faBroadcastTower} />
        },
        {
          title: "Walkie-Talkie Connection",
          description: "Walkie-Talkie connections enable wireless communication through handheld devices, commonly known as walkie-talkies. These devices allow users to have instant and reliable voice communication within a certain range. Walkie-talkies are widely used in various industries such as public safety, security, event management, and outdoor activities. They provide a convenient and efficient means of communication, particularly in situations where instant voice contact is crucial.",
          icon: <FontAwesomeIcon color="#48bb78" icon={faWalking} />
        },
        {
          title: "Importation, Sale and Services for different categories of Office and Companies",
          description: "Importation, sale, and services for different categories of offices and companies involve the provision of various telecommunications equipment, solutions, and support tailored to specific business needs. This includes supplying and maintaining hardware and software solutions, setting up communication networks, and providing ongoing technical support and consultation services. By catering to the unique requirements of different office and company categories, service providers facilitate efficient and reliable communication and connectivity for businesses.",
          icon: <FontAwesomeIcon color="#48bb78" icon={faBuilding} />
        },
        {
          title: "Trade, Maintain, Improve, Repair, Service",
          description: "The trade, maintenance, improvement, repair, and service of telecommunications equipment and systems ensure their smooth operation and optimal performance. This involves activities such as trading telecommunications products and components, performing routine maintenance and upgrades, troubleshooting and repairing equipment, and providing comprehensive service and support. Through these efforts, service providers contribute to the continuous improvement and efficient functioning of telecommunication networks.",
          icon: <FontAwesomeIcon color="#48bb78" icon={faTools} />
        },
        {
          title: "Research",
          description: "Research in the field of telecommunications focuses on advancing knowledge and developing new technologies, services, and solutions. This includes conducting studies, experiments, and investigations to explore innovative ways to enhance communication systems, improve network efficiency, develop cutting-edge hardware and software, and address emerging challenges. Research plays a vital role in shaping the future of telecommunications and driving advancements in the industry.",
          icon: <FontAwesomeIcon color="#48bb78" icon={faFlask} />
        },
        {
          title: "Hosting of websites",
          description: "Hosting services for websites involve providing server infrastructure and resources to host websites and make them accessible on the internet. Web hosting providers allocate server space, offer technical support, and ensure the security and availability of hosted websites. Hosting services enable individuals, businesses, and organizations to establish an online presence, store website files and data, and make their websites accessible to users worldwide.",
          icon: <FontAwesomeIcon color="#48bb78" icon={faServer} />
        },
        {
          title: "Broadcasting",
          description: "Broadcasting involves the distribution of audio and video content to a wide audience. It includes transmitting television and radio signals, live streaming events, and delivering on-demand content to viewers and listeners. Broadcasting services are essential for media organizations, entertainment companies, and content creators to reach their target audience and engage with them through various channels and platforms.",
          icon: <FontAwesomeIcon color="#48bb78" icon={faFile} />
        },
        {
          title: "Content delivery",
          description: "Content delivery involves the distribution of digital content, such as videos, images, documents, and software, to end-users or consumers. Content delivery networks (CDNs) ensure efficient and reliable content distribution by delivering content from servers located geographically closer to the users. This helps reduce latency, ensure faster content delivery, and enhance the overall user experience. Content delivery services are essential for businesses and organizations that rely on delivering digital content to their customers.",
          icon: <FontAwesomeIcon color="#48bb78" icon={faFile} />
        },
        {
          title: "Internet",
          description: "The internet is a global network that connects millions of devices worldwide. It provides access to a vast array of information, services, and resources, enabling communication, collaboration, and information sharing on a global scale. The internet plays a central role in various aspects of modern life, including communication, e-commerce, entertainment, education, and research. Its widespread availability and accessibility have revolutionized how people interact and access information.",
          icon: <FontAwesomeIcon color="#48bb78" icon={faGlobe} />
        },
        {
          title: "Telephone",
          description: "Telephone services involve voice communication over a network, allowing individuals and businesses to make and receive phone calls. Telephone networks enable users to connect with each other through voice signals transmitted over wired or wireless connections. Telephone services have evolved from traditional landlines to digital and mobile technologies, providing advanced features such as voicemail, call forwarding, and video calls. They remain a fundamental mode of communication for personal and professional purposes.",
          icon: <FontAwesomeIcon color="#48bb78" icon={faPhone} />
        },
        {
          title: "Over-the-top (OTT) Service",
          description: "Over-the-top (OTT) services refer to content and communication services delivered over the internet, bypassing traditional telecommunications networks. These services include streaming media, messaging apps, voice and video calls, and other digital content offerings. OTT services have gained popularity due to their convenience, flexibility, and the ability to access them across multiple devices. They have transformed how people consume media and communicate, challenging traditional telecommunication models.",
          icon: <FontAwesomeIcon color="#48bb78" icon={faVideo} />
        },
        {
          title: "Telecommunication or Wireless communication",
          description: "Telecommunication or wireless communication encompasses various forms of wireless transmission and reception of information. It includes technologies such as cellular networks, satellite communication, wireless local area networks (WLANs), and Bluetooth. These technologies enable wireless voice and data communication over short and long distances. Telecommunication and wireless communication have revolutionized connectivity and made communication more accessible, allowing people to stay connected anytime and anywhere.",
          icon: <FontAwesomeIcon color="#48bb78" icon={faSatelliteDish} />
        },
        {
          title: "Accessories, Assemblies, Apparatus, Spars, Hardware and Software",
          description: "Telecommunications accessories, assemblies, apparatus, and spares are components and equipment used in telecommunications systems. These include items such as cables, connectors, antennas, modems, routers, switches, and other hardware and software components. Telecommunication companies and providers rely on these accessories and components to build and maintain their networks, ensuring seamless communication and connectivity for their users.",
          icon: <FontAwesomeIcon color="#48bb78" icon={faCogs} />
        }
      ];

    const handleExpand = (index) => {
        setExpandedCard(index === expandedCard ? null : index);
    };

    return (
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.map((card, index) => (
                    <div
                        key={index}
                        className={`bg-gray-700 shadow-lg rounded p-6 flex flex-col ${expandedCard === index ? 'h-auto' : 'h-80'
                            }`}
                    >
                        {card.icon}
                        <h2 className="text-lg text-white font-semibold mt-4 mb-4">{card.title}</h2>
                        <p className="text-gray-200 mb-4">
                            {expandedCard === index ? card.description : card.description.slice(0, 100) + '...'}
                        </p>
                       
                        <button
                            className="bg-gray-500  hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded mt-auto"
                            onClick={() => handleExpand(index)}
                        >
                            {expandedCard === index ? 'See Less' : 'See More'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;
