import Carousel from "../components/Carousel/Carousel";
import TopDestinationCountrys from "../sections/TopDestinationCountrys";
import WorldBestTouristSpots from "../sections/WorldBestTouristSpots";


const Home = () => {
    return (
        <div>
             <Carousel></Carousel>
             <WorldBestTouristSpots></WorldBestTouristSpots>
             <TopDestinationCountrys></TopDestinationCountrys>
        </div>
    );
};

export default Home;