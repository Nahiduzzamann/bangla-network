import { Parallax } from "react-parallax";

const OurCompany = () => {
    return (
        <div className="container mx-auto">
            <h3 className="text-center text-3xl mt-10 lg:mt-24 text-gray-600">Our Company</h3>
            <h2 className="text-center text-4xl mb-7 mt-7 text-white">Why Choose Bangla Network</h2>
            <div>
                <div className="relative">
                    <Parallax bgImage="https://i.ibb.co/nrjNc9r/wisp.jpg" strength={500}>
                        <div className="h-screen bg-black bg-opacity-60">
                            <div className="flex flex-col justify-center items-center h-screen pt-20 pl-2 pr-2">
                                <div className="container mx-auto py-12 flex flex-col lg:flex-row">
                                    <div className="lg:w-1/2">
                                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                                            <div className="flex justify-center">
                                                <img className="h-36 w-36 md:h-60 md:w-60 drop-shadow-2xl rounded-full shadow-2xl" src="https://images.unsplash.com/photo-1548174753-897b449b097e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" alt="" />
                                            </div>
                                            <div>
                                                <img className="h-36 w-36 md:h-60 md:w-60 drop-shadow-2xl rounded-full shadow-2xl" src="https://images.unsplash.com/photo-1564038057903-1d48b852b412?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                                            </div>
                                            <div className="flex justify-center">
                                                <img className="h-36 w-36 md:h-60 md:w-60 drop-shadow-2xl rounded-full shadow-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNYW2VNCva-76r3x-xJKugBl0IwODi3wpWWT-0RMboMNB9JfijhGGxo8x_K3w-FLu0-eA&usqp=CAU" alt="" />
                                            </div>
                                            <div>
                                                <img className="h-36 w-36 md:h-60 md:w-60 drop-shadow-2xl rounded-full shadow-2xl" src="https://img.freepik.com/premium-photo/tech-devices-icons-connected-digital-planet-earth_117023-449.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 mt-12 lg:mt-0 lg:pl-12 shadow-2xl shadow-gray-800">
                                        <h2 className="text-xl md:text-3xl font-bold mb-4 text-white">There are several reasons why you should choose our company.</h2>
                                        <p className=" text-sm md:text-base text-gray-100">
                                        Our system offers a comprehensive range of communication and telecommunication services, including basic/fixed line, cellular/mobile, wireless, and satellite services. We provide broadband services, data transmission, and advanced technologies like computer networks and intelligent networks. Our expertise extends to IP phone, WiFi, and internet solutions, including wireless tower installation and importing related goods. We excel in developing integrated solutions, software applications, and cloud-hosted business platforms. With a focus on emerging technologies, we offer services in areas such as data analytics, system administration, and enterprise mobility. Additionally, we provide outsourcing services and supply equipment for various industries. By choosing our system, you gain access to a wide range of services, cutting-edge technology, and comprehensive solutions tailored to your needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                </div>
            </div>
        </div>
    )

}
export default OurCompany;



