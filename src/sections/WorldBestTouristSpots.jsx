import { useEffect, useState } from "react";
import TouristSpotCard from "../components/TouristSpotCard/TouristSpotCard";

const WorldBestTouristSpots = () => {
  const [spotsInfo, setSpotsInfo] = useState([]);


  useEffect(() => {
    fetch("https://b9a10-tourism-management-server.vercel.app/spots")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSpotsInfo(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      }); // Close the catch block properly
  }, []);

  return (
    <div className="container mx-auto px-5 my-5 md:my-10 lg:my-12">
      <h1 className="text-center font-bold text-3xl my-5 md:my-10 lg:my-12">World Best Tourist Spots</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {spotsInfo.map((spot) => <TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>)}
      </div>
    </div>
  );
};

export default WorldBestTouristSpots;

