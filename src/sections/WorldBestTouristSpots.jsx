import { useEffect, useState } from "react";
import TouristSpotCard from "../components/TouristSpotCard/TouristSpotCard";

const WorldBestTouristSpots = () => {
  const [spotsInfo, setSpotsInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/spots")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSpotsInfo(data);
      });
  }, []);
  return (
    <div className="container mx-auto px-5">
      <h1>World Best Tourist Spots</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {spotsInfo.map((spot) => <TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>)}
      </div>
    </div>
  );
};

export default WorldBestTouristSpots;
