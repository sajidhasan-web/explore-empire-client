import { useEffect, useState } from "react";
import TouristSpotCard from "../components/TouristSpotCard/TouristSpotCard";

const AllTouristsSpot = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [spotsInfo, setSpotsInfo] = useState([]);
    const [sortOrder, setSortOrder] = useState("ascending"); // Default sorting order

    useEffect(() => {
        fetch("https://b9a10-tourism-management-server.vercel.app/spots")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setSpotsInfo(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setIsLoading(false);
            });
    }, []);

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    // Sorting function based on averageCost
    const compareByAverageCost = (a, b) => {
        const costA = parseFloat(a.averageCost);
        const costB = parseFloat(b.averageCost);
        if (sortOrder == "ascending") {
            return costA - costB;
        } else {
            return costB - costA;
        }
    };

    // Sort the spotsInfo array based on averageCost
    spotsInfo.sort(compareByAverageCost);

    if (isLoading) {
        return (
            <div className="h-[calc(100vh-350px)] flex justify-center items-center">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-5 my-5 md:my-10 lg:my-12">
            <h1 className="text-center font-bold text-3xl my-5 md:my-10 lg:my-12">All Tourist Spots</h1>
            <div className="w-full flex justify-center">
            <div className="my-5 dropdown  text-white">
                <select
                    className="w-full px-4 py-3 rounded-md border-2 dropdown bg-primary"
                    onChange={handleSortChange}
                    value={sortOrder}
                >
                    <option disabled value="">
                        Sort By Avg Cost
                    </option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {spotsInfo.map((spot) => (
                    <TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>
                ))}
            </div>
        </div>
    );
};

export default AllTouristsSpot;
