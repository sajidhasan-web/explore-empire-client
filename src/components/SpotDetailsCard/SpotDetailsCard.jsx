import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SpotDetailsCard = () => {


    const {id} = useParams()
    console.log(id);
    const [spot, setSpot] = useState({})

    useEffect(()=>{
        fetch(`https://b9a10-tourism-management-server.vercel.app/singleSpot/${id}`)
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