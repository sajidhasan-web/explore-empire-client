const AddTouristsSpot = () => {

    const handleAddSpot = (e)=>{
        e.preventDefault();
        const form = e.target;
        const imageURL = form.imageURL.value;
        const touristsSpotName = form.touristsSpotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const shortDescription = form.shortDescription.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value + "days";
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        console.log(imageURL, touristsSpotName, countryName, location,  shortDescription, averageCost, seasonality, travelTime, totalVisitorsPerYear);

        fetch()
        
    }

  return (
    <div className=" container mx-auto  p-8 space-y-3 rounded-xl">
      <h1 className="text-2xl font-bold text-center">Add Tourists Spot</h1>
      <form onSubmit={handleAddSpot} className="space-y-6 grid grid-cols-1 md:grid-cols-12 md:gap-5">
        <div className="space-y-1 text-sm md:col-span-12">
          <label className="block text-gray-400">
            Image URL
          </label>
          <input
            type="text"
            name="imageURL"
            placeholder="Enter image URL"
            className="w-full px-4 py-3 rounded-md border-gray-700 bg-slate-300 focus:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm md:col-span-6">
          <label className="block text-gray-400">
          Tourists Spot Name
          </label>
          <input
            type="text"
            name="touristsSpotName"
            placeholder="Enter tourists spot name"
            className="w-full px-4 py-3 rounded-md border-gray-700 bg-slate-300 focus:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm md:col-span-6">
          <label className="block text-gray-400">
          Country Name
          </label>
          <input
            type="text"
            name="countryName"
            placeholder="Enter country name"
            className="w-full px-4 py-3 rounded-md border-gray-700 bg-slate-300 focus:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm md:col-span-6">
          <label className="block text-gray-400">
          Location
          </label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            className="w-full px-4 py-3 rounded-md border-gray-700 bg-slate-300 focus:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm md:col-span-6">
          <label className="block text-gray-400">
          Short Description
          </label>
          <input
            type="text"
            name="shortDescription"
            placeholder="Enter short description"
            className="w-full px-4 py-3 rounded-md border-gray-700 bg-slate-300 focus:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm md:col-span-6">
          <label className="block text-gray-400">
           Average cost
          </label>
          <input
            type="number"
            name="averageCost"
            placeholder="Enter average cost amount"
            className="w-full px-4 py-3 rounded-md border-gray-700 bg-slate-300 focus:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm md:col-span-6">
          <label className="block text-gray-400">
          Seasonality
          </label>
          <input
            type="text"
            name="seasonality"
            placeholder="Enter seasonality “E.g.” summer, winter"
            className="w-full px-4 py-3 rounded-md border-gray-700 bg-slate-300 focus:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm md:col-span-6">
          <label className="block text-gray-400">
          Travel Time
          </label>
          <input
            type="number"
            name="travelTime"
            placeholder="Enter travel time number of days “E.g.” 1 , 2 , 3  etc."
            className="w-full px-4 py-3 rounded-md border-gray-700 bg-slate-300 focus:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm md:col-span-6">
          <label className="block text-gray-400">
          Total Visitors Per Year
          </label>
          <input
            type="number"
            name="totalVisitorsPerYear"
            placeholder="Enter the number of visitor visit per year"
            className="w-full px-4 py-3 rounded-md border-gray-700 bg-slate-300 focus:border-violet-400"
          />
        </div>
        
        <button type="submit" className="md:col-span-12 block w-full p-3 text-center font-bold text-white rounded-sm bg-violet-400">
          Add
        </button>
      </form>
     
    </div>
  );
};

export default AddTouristsSpot;
