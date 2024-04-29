import Carousel from "../components/Carousel/Carousel";
import OurPatners from "../sections/OurPatners";
import TopDestinationCountrys from "../sections/TopDestinationCountrys";
import WorldBestTouristSpots from "../sections/WorldBestTouristSpots";


const Home = () => {
    return (
        <div>
             <Carousel></Carousel>
             <WorldBestTouristSpots></WorldBestTouristSpots>
             <TopDestinationCountrys></TopDestinationCountrys>
             <OurPatners></OurPatners>
        </div>
    );
};

export default Home;