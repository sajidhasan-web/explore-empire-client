import { useEffect, useState } from "react";


const AllTouristsSpot = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [touristsData, setTouristsData] = useState([]);
  
    useEffect(() => {
      // Fetch data from the database
      fetch("http://localhost:5000/spots")
        .then((response) => response.json())
        .then((data) => {
          // Update state with fetched data
          setTouristsData(data);
          // Set loading to false when data fetching is complete
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          // Set loading to false if there's an error
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
    <div>
      <h1>All Tourists Spot {touristsData.length}</h1>
      <div>
        {
        touristsData.map( touristsSpot => <>
          <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img src={touristsData.imageURL} alt={touristsData.touristsSpotName} className="w-full" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{touristsData.touristsSpotName}</div>
                <p className="text-gray-700 text-base">
                  Average Cost: {touristsData.averageCost} | Total Visitors Per Year:{" "}
                  {touristsData.totalVisitorsPerYear} | Travel Time: {touristsData.travelTime} |
                  Seasonality: {touristsData.seasonality}
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
