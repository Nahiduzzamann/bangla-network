import Banner from "../Banner/Banner";
import OurCompany from "../OurCompany/OurCompany";
import Services from "../Services/Services";
import StatusSection from "../StatusSection/StatusSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurCompany></OurCompany>
            <StatusSection></StatusSection>
            <Services></Services>
        </div>
    );
};

export default Home;