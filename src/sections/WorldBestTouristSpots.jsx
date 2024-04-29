import { useEffect, useState } from "react";
import TouristSpotCard from "../components/TouristSpotCard/TouristSpotCard";

const WorldBestTouristSpots = () => {
  const [spotsInfo, setSpotsInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetch("https://b9a10-tourism-management-server.vercel.app/spots")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setSpotsInfo(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      }); // Close the catch block properly
  }, []);


  if (isLoading) {
    return (
      <div className="h-[calc(100vh-470px)] flex justify-center items-center">
        {/* <span className="loading loading-spinner loading-lg bg-primary"></span> */}
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
      </div>
    );
     }
 

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

