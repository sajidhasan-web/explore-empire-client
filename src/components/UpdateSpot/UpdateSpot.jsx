import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const UpdateSpot = () => {

    const [selectedCountry, setSelectedCountry] = useState('');
    const [spot, setSpot] = useState({})

    const {id} = useParams()
    console.log(id);

    useEffect(()=>{
        fetch(`https://b9a10-tourism-management-server.vercel.app/updateSpot/${id}`)
       .then(res => res.json())
       .then(data => {
        console.log(data);
        setSpot(data)
       })
    },[id])
    
    // https://https://b9a10-tourism-management-server.vercel.app
    
      const handleChange = (event) => {
        setSelectedCountry(event.target.value);
      }
    
      const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const imageURL = form.imageURL.value;
        const touristsSpotName = form.touristsSpotName.value;
        const location = form.location.value;
        const shortDescription = form.shortDescription.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
       const info = {
        imageURL,
        touristsSpotName,
        selectedCountry,
        location,
        shortDescription,
        averageCost,
        seasonality,
        travelTime,
        totalVisitorsPerYear,
       }
    
        fetch(`https://b9a10-tourism-management-server.vercel.app/updateSpot/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(info),
  
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
              toast.success("Tourists spot updated successfully");
            }
          })
          .catch((error) => {
            console.error("Error updating tourist spot:", error);
            toast.error("An error occurred while updating tourist spot");
        });

        

      };

      

      
    
      return (
        <div className=" container mx-auto  p-8 space-y-3 rounded-xl ">
          <h1 className="text-2xl font-bold text-center">Update Your Tourists Spot</h1>
          <form
            onSubmit={handleUpdate}
            className="space-y-6 grid grid-cols-1 md:grid-cols-12 md:gap-5"
          >
            <div className="space-y-1 text-sm md:col-span-12">
              <label className="block text-gray-400">Image URL</label>
              <input
                type="text"
                name="imageURL"
                defaultValue={spot.imageURL}
                placeholder="Enter image URL"
                className="w-full px-4 py-3 rounded-md border-2"
              />
            </div>
            <div className="space-y-1 text-sm md:col-span-6">
              <label className="block text-gray-400">Tourists Spot Name</label>
              <input
                type="text"
                name="touristsSpotName"
                defaultValue={spot.touristsSpotName}
                placeholder="Enter tourists spot name"
                className="w-full px-4 py-3 rounded-md border-2"
              />
            </div>
            <div className="space-y-1 text-sm md:col-span-6">
              <label className="block text-gray-400">Country Name</label>
              <select
                className="w-full px-4 py-3 rounded-md border-2"
                value={selectedCountry}
                onChange={handleChange}
              >
                <option disabled value="">
                  Select a country
                </option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Thailand">Thailand</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Cambodia">Cambodia</option>
              </select>
            </div>
            <div className="space-y-1 text-sm md:col-span-6">
              <label className="block text-gray-400">Location</label>
              <input
                type="text"
                name="location"
                defaultValue={spot.location}
                placeholder="Enter location"
                className="w-full px-4 py-3 rounded-md border-2"
              />
            </div>
            <div className="space-y-1 text-sm md:col-span-6">
              <label className="block text-gray-400">Short Description</label>
              <input
                type="text"
                name="shortDescription"
                defaultValue={spot.shortDescription}
                placeholder="Enter short description"
                className="w-full px-4 py-3 rounded-md border-2"
              />
            </div>
            <div className="space-y-1 text-sm md:col-span-6">
              <label className="block text-gray-400">Average cost</label>
              <input
                type="text"
                name="averageCost"
                defaultValue={spot.averageCost}
                placeholder="Enter average cost amount"
                className="w-full px-4 py-3 rounded-md border-2"
              />
            </div>
            <div className="space-y-1 text-sm md:col-span-6">
              <label className="block text-gray-400">Seasonality</label>
              <input
                type="text"
                name="seasonality"
                defaultValue={spot.seasonality}
                placeholder="Enter seasonality “E.g.” summer, winter"
                className="w-full px-4 py-3 rounded-md border-2"
              />
            </div>
            <div className="space-y-1 text-sm md:col-span-6">
              <label className="block text-gray-400">Travel Time</label>
              <input
                type="text"
                name="travelTime"
                defaultValue={spot.travelTime}
                placeholder="Enter travel time number of days “Ex.” 1 day , 2 days , 3 days  etc."
                className="w-full px-4 py-3 rounded-md border-2"
              />
            </div>
            <div className="space-y-1 text-sm md:col-span-6">
              <label className="block text-gray-400">Total Visitors Per Year</label>
              <input
                type="text"
                name="totalVisitorsPerYear"
                defaultValue={spot.totalVisitorsPerYear}
                placeholder="Enter the number of visitor visit per year"
                className="w-full px-4 py-3 rounded-md border-2"
              />
            </div>
    
            <button
              type="submit"
              className="md:col-span-12 block w-full p-3 text-center font-bold text-white rounded-sm bg-violet-400"
            >
              Update
            </button>
          </form>
        </div>
      );
    };

export default UpdateSpot;