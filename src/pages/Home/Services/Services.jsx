
import { FaAngellist } from "react-icons/fa";
import { FaEtsy } from "react-icons/fa";
import { FaUserInjured } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";

const Services = () => {
    const services = [
        {
            title: "Web Application Development",
            icon: <FaLaptop className="w-8 h-8 text-gray-500" />,
            description: "We offer custom web application development services tailored to meet your specific business needs.",
        },
        {
            title: "Mobile Application Development",
            icon: <FaMobile className="w-8 h-8 text-gray-500" />,
            description: "Our team specializes in developing high-quality mobile applications for both iOS and Android platforms.",
        },
        {
            title: "Software Security",
            icon: <FaAngellist className="w-8 h-8 text-gray-500" />,
            description: "We prioritize the security of your software and ensure that it is protected against potential threats.",
        },
        {
            title: "Wordpress Development",
            icon: <FaWordpress className="w-8 h-8 text-gray-500" />,
            description: "We provide professional Wordpress development services to help you create a stunning and functional website.",
        },
        {
            title: "E-Commerce Development",
            icon: <FaEtsy className="w-8 h-8 text-gray-500" />,
            description: "Our team has expertise in developing secure and scalable e-commerce solutions for your online business.",
        },
        {
            title: "UI/UX Development",
            icon: <FaUserInjured className="w-8 h-8 text-gray-500" />,
            description: "We focus on creating intuitive and visually appealing user interfaces to enhance the user experience.",
        },
    ];
    return (
        <div>
            <h3 className="text-center text-4xl mt-10 lg:mt-24 text-gray-600">Our Services</h3>
            <h2 className="text-center text-lg mb-7 mt-4 text-white">We create a dynamic business impact with our innovative and intuitive solutions for all your digital essentials.</h2>
            <div>
                <div className="bg-gray-600 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="p-6 bg-gray-400 rounded-lg shadow hover:bg-gray-700 hover:shadow-lg transform hover:scale-110 transition-all duration-500"
                                >
                                    <div className="flex items-center justify-center mb-4">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                                    <p className="text-gray-200">{service.description}</p>
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