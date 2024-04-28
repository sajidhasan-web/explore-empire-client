import { Link } from "react-router-dom";

const TouristSpotCard = ({spot}) => {

    const { imageURL,
        touristsSpotName,
        selectedCountry,
        location,
        shortDescription,
        averageCost,
        seasonality,
        travelTime,
        totalVisitorsPerYear } = spot
  return (
    <div className="card card-compact bg-base-100 hover:scale-105 transition hover:shadow-xl p-4 border">
      <figure>
        <img
          src={imageURL}
          alt={touristsSpotName}
        />
      </figure>
      <Link className=" ml-4"><span className="card-meta-item font-bold text-orange-300 hover:underline">{selectedCountry}</span></Link>
      <div className="card-body">
        <h2 className="card-title">{touristsSpotName}</h2>
        <p>{shortDescription.length > 50 && shortDescription.slice(0, 50)}</p>
        <div>
              <span>Location: {location}</span>
              <span>Travel time: {travelTime}</span>
              <span>Visitors:{totalVisitorsPerYear} per year</span>
              <span>Average Cost: {averageCost}</span>
              <span>Seasonality: {seasonality}</span>
            </div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-sm">view details</button>
        </div>
      </div>
  
  );
};

export default TouristSpotCard;
