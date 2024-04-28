import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SpotDetailsCard = () => {


    const {id} = useParams()
    console.log(id);
    const [spot, setSpot] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/singleSpot/${id}`)
       .then(res => res.json())
       .then(data => {
        console.log(data);
        setSpot(data)
       })
    },[id])



    return (
        <div>
            <h1>Details card {spot.touristsSpotName}</h1>
        </div>
    );
};

export default SpotDetailsCard;