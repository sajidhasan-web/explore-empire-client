import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/FirebaseProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyListPage = () => {
    const { user } = useContext(AuthContext);
    const [myList, setMyList] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/mySpots/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setMyList(data);
                })
                .catch(error => {
                    console.error("Error:", error);
                });
        }
    }, [user]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteSpot/${id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
                // Update myList state after successful deletion
                setMyList(prevList => prevList.filter(spot => spot._id !== id));
                toast.success("Spot deleted successfully");
            } else {
                // Spot was not deleted, handle accordingly (show toast or error message)
                toast.error("Failed to delete spot");
            }
        })
        .catch(error => {
            console.error("Error deleting spot:", error);
            // Handle error, show toast or error message
        });
    };

    return (
        <div>
            <h1>My List Page {myList.length}</h1>
            <div>
                {
                    myList.map((spot) => (
                        <div key={spot._id}>
                            <h1>{spot.name}</h1>
                            <p>{spot.description}</p>
                            <Link to={`/updateSpot/${spot._id}`}><button className="btn mr-4">Update</button></Link>
                            <button onClick={() => handleDelete(spot._id)} className="btn">Delete</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyListPage;
