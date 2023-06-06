
import React, { useState } from 'react';

const OurServices = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const data = [
        {
            title: 'Communication and Telecommunication Networks',
            description:
                'To plan, install, operate, provide and maintain all types of local, national and international communication and telecommunication networks, systems, services, including but not limited to basic/fixed line services, cellular/mobile services, wireless services, satellite services and other telephony or communications services, value added voice, video and data services, new business services related thereto, message relay, facsimile, electronic mail services, television, tele-computing, telematics, audio and video conferencing services, maritime and aeronautical communication services, paging, video text, audio text, voice mail, data systems, private switching network services, leased line communication services.',
        },
        {
            title: 'Broadband and Transmission Networks',
            description:
                'To carry on the Business of broadband services, transmission networks of all types including computer networks, intelligent networks, globally managed data networks, international gateway networks and related services, data transmission, information technology enabled and related services, cloud services, managed services, customer care centers, customer relationship management, multimedia services, data center services, whether separately or converged together, and to procure all such licenses, authorizations, sanctions, Registrations, approvals and permissions from the relevant authorities as may be required from time to time for provision and carrying out of such services, activities and businesses, and to secure any renewals, extensions for all such licenses, authorizations, sanctions, registrations, approvals and permissions.',
        },
        {
            title: 'IP Phone, WIFI, and Internet Services',
            description:
                'To carry on the business of IP phone, WIFI, Internet sale, Connection and customers service, all IP phone, Internet, WIFI connection of District Upazila and Union level. Installation of wireless towers at District Upazila and Union Level, Importer of all types IP Phone, wifi and internet based goods. Providing walkie-talkie connections, importation, sale, and services for different categories of offices and companies. internet service provider and to provide, render or make available and operate, sell, export, import, trade, maintain, improve, repair, service, research, develop all kinds of services and to provide services in respect of and relating to bandwidth, hosting of websites, broadcasting, content delivery, internet telephony, over-the-top (OTT) services, telecommunications or wireless communications through internet or any other electronic media, and deal or trade in accessories, assemblies, apparatus, spares, hardware and software for such services.',
        },
        {
            title: 'Integrated Solutions and Information Systems',
            description:
                'To carry on all kinds of end to end integrated solutions involving information systems, developing, designing, marketing of communication platforms), with features and functionality including those related to social, commerce, messaging, communication, gaming and other online services, cloud hosted business platforms and computer and web based application products, systems, peripherals and materials, software packages and applications, client server applications, and to undertake the business of system and network integration, development and management, product application and development, computer maintenance and technical support services, internet access, networking and electronic media, telecommunication and web commerce application services and any combination thereof, and to set up, implement, sell and provide other telecommunication, information technology and related businesses as may evolve with advancement or changes in technology.',
        },
        {
            title: 'Information Technology Services',
            description:
                'To carry on the business of providing information technology services in the digital space and other emerging technologies including but not limited to enterprise search, data capability, data mining, data analytics, enterprise mobility, system administration, web software engineering, enterprise solutions, managed security solutions, information management including B2B, ecommerce and m-commerce (mobile commerce), business information and other applications, risk management, communication management, network management, facilitation of electronic transactions as well as other internet related services, system integration, intelligent networks, multi-media, enterprise resource planning, electronic communication, client service technologies & solutions, automation systems & processes, Internet of Things (IoT) related products & systems, artificial intelligence technology & systems.',
        },
        {
            title: 'Outsourcing Services',
            description:
                'To carry on the business of providing outsourcing services for all processes, sub Processes, activities and all other work performed by business in various industries within Bangladesh and across the world. To manufacture, buy, purchase, hire-purchase, acquire, assemble, repair, design, alter, develop, improve, exchange, let on hire, export, import, sell, re-sell, and deal in all sorts of equipment, plant & machineries, accessories, assemblies, apparatus, instruments, devices, spares, components, parts, sub-parts, tools, goods, articles, hardware and software required for or in furtherance of the business activities of the Company.',
        },
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
                        className={`bg-gray-700 shadow-lg rounded p-6 flex flex-col ${expandedCard === index ? 'h-auto' : 'h-64'
                            }`}
                    >
                        <h2 className="text-xl text-white font-semibold mb-4">{card.title}</h2>
                        <p className="text-gray-200 mb-4">
                            {expandedCard === index ? card.description : card.description.slice(0, 120) + '...'}
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
