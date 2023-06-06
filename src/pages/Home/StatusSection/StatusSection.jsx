import { FaUsers, FaTasks, FaUsersCog } from "react-icons/fa";

const StatusSection = () => {
    return (
        <div className="mt-10 lg:mt-24">
            <div className="bg-gray-600 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <div className="flex items-center p-6 bg-white rounded-lg shadow-lg">
                            <FaUsers className="w-10 h-10 text-blue-500" />
                            <div className="ml-4">
                                <p className="text-xl font-semibold text-gray-800">Happy Consumer</p>
                                <p className="text-gray-600">5000+</p>
                            </div>
                        </div>
                        <div className="flex items-center p-6 bg-white rounded-lg shadow-lg">
                            <FaTasks className="w-10 h-10 text-green-500" />
                            <div className="ml-4">
                                <p className="text-xl font-semibold text-gray-800">Finished Connected Area</p>
                                <p className="text-gray-600">100+</p>
                            </div>
                        </div>
                        <div className="flex items-center p-6 bg-white rounded-lg shadow-lg">
                            <FaUsersCog className="w-10 h-10 text-purple-500" />
                            <div className="ml-4">
                                <p className="text-xl font-semibold text-gray-800">Connectivity Experts Each Area</p>
                                <p className="text-gray-600">20+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default StatusSection;
