import { useContext, useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { AuthContext } from "../providers/FirebaseProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyListPage = () => {
  const { user } = useContext(AuthContext);
  const [myList, setMyList] = useState([]);



  useEffect(() => {
    if (user) {
      fetch(`https://b9a10-tourism-management-server.vercel.app/mySpots/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMyList(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [user]);

 
 
  const handleDelete = (id) => {
    fetch(`https://b9a10-tourism-management-server.vercel.app/deleteSpot/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          setMyList((prevList) => prevList.filter((spot) => spot._id !== id));
          toast.success("Spot deleted successfully");
        } else {
          toast.error("Failed to delete spot");
        }
      });
  };

  return (
    <div className="container mx-auto px-5 md:my-10 lg:my-12 w-full">
  <div>
    <table className="table w-full">
      {/* head */}
      <thead>
        <tr>
          <th>Tourists Spot Name</th>
          <th>Selected Country</th>
          <th>Average Cost</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {myList.map((spot) => (
          <tr key={spot._id}>
            <td>
              <Link to={`/spotCardDetails/${spot._id}`}>
                <span className="hover:underline hover:text-blue-600">{spot.touristsSpotName}</span>
              </Link>
            </td>
            <td>{spot.selectedCountry}</td>
            <td>{spot.averageCost}</td>
            <td className="space-x-2">
              <Link to={`/updateSpot/${spot._id}`}>
                <button className="btn">update</button>
              </Link>
              <button onClick={() => handleDelete(spot._id)} className="btn">delete</button>
              <Link to={`/spotCardDetails/${spot._id}`}>
                <button className="btn">details</button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default MyListPage;
