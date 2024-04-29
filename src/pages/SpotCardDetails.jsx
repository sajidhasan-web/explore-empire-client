import {useLoaderData} from 'react-router-dom'

const SpotCardDetails = () => {
    const spot = useLoaderData() 

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
        <div className="container mx-auto px-5 my-5 md:my-10 lg:my-12">
      <div
        className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12"
      >
        <img
          src={imageURL}
          alt=""
          className="object-cover w-full h-full rounded  lg:col-span-7"
        />
        <div className="md:p-6 space-y-2 lg:col-span-5">
          <div className="card-body">
            <p className="text-sky-400 font-semibold">Country: {selectedCountry}</p>
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {touristsSpotName}
            </h3>
            <p className="text-gray-400 italic">{location}</p>
            <p>
              Average Cost:
              <span className="text-primary text-lg font-medium ml-2">
                {averageCost}
              </span>
            </p>
              <p className="">
                  Seasonality:<span className="text-green-500 "> {seasonality}</span>{" "}
              </p>
              <p>
                 Travel Time: <span className="text-red-300 "> {travelTime}</span>{" "}
              </p>
              <p>
                  Total Visitors Per Year: <span className="text-red-300 "> {totalVisitorsPerYear}</span>{" "}
              </p>
         
               <p>{shortDescription}</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SpotCardDetails;