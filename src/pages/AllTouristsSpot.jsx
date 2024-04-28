import { useEffect, useState } from "react";


const AllTouristsSpot = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [touristsData, setTouristsData] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:5000/spots")
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
          setTouristsData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setIsLoading(false);
        });
    }, []);
 

    if (isLoading) {
        return (
          <div className="h-[calc(100vh-470px)] flex justify-center items-center">
            <span className="loading loading-spinner loading-lg bg-primary"></span>
          </div>
        );
      }
 
 



  return (
    <div className="container mx-auto">
      <h1>All Tourists Spot {touristsData.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
        touristsData.map( touristsSpot => <>
          <div>
            <div className=" rounded overflow-hidden shadow-lg">
              <img src={touristsData.imageURL} alt={touristsData.touristsSpotName} className="w-full" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{touristsSpot.touristsSpotName}</div>
                <p className="text-gray-700 text-base">
                  Average Cost: {touristsSpot.averageCost} | Total Visitors Per Year:{" "}
                  {touristsSpot.totalVisitorsPerYear} | Travel Time: {touristsSpot.travelTime} |
                  Seasonality: {touristsSpot.seasonality}
                </p>
              </div>
              <div className="px-6 py-4">
                <a
                  href="/view-details"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AllTouristsSpot;
