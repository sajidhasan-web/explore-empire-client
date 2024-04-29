import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";

const TouristSpotCard = ({spot}) => {

    const { 
        _id,
        imageURL,
        touristsSpotName,
        selectedCountry,
        location,
        shortDescription,
        averageCost,
        seasonality,
        travelTime,
        totalVisitorsPerYear } = spot
  return (
    <div className="card card-compact bg-base-100 transition hover:shadow-xl p-4 border">
      <figure>
        <img
          src={imageURL}
          alt={touristsSpotName}
        />
      </figure>
      <Link><span className="card-meta-item font-bold text-orange-300 hover:underline flex items-center gap-2"><MdLocationOn className="text-xl"></MdLocationOn> {selectedCountry}</span></Link>
      <span className="flex items-center gap-2 text-sm text-blue-500"><FaLocationArrow></FaLocationArrow> {location}</span>
      <div className="flex flex-col flex-grow">
        <h2 className="card-title">{touristsSpotName}</h2>
        <span>{shortDescription.length > 50 && shortDescription.slice(0, 50)}</span>
        <div>
             
              <div className="flex justify-between">
              <span><span className="font-semibold">Travel time:</span> {travelTime}</span>
              <span><span className="font-semibold">Visitors:</span> {totalVisitorsPerYear}<sup> <span className="text-[12px]">(per year)</span></sup></span>
              </div>
              <div>
              <p><span className="font-semibold">Seasonality:</span> {seasonality}</p>
              <p><span className="font-semibold">Average Cost:</span> {averageCost}</p>
            </div>
        </div>
       
      </div>
      <span className=" justify-end">
        <Link to={`/spotCardDetails/${_id}`}>
          <button className="btn btn-primary btn-sm">view details</button>
        </Link>
        </span>
    </div>
  );
};


export default TouristSpotCard;
