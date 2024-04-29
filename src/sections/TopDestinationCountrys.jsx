import bangladesh from '../assets/bangladesh.jpg'
import Malaysia from '../assets/malay.jpg'
import Vietnam from '../assets/vietnam.jpg'
import Thailand from '../assets/thailand.jpg'
import Cambodia from '../assets/cambodia.jpg'
import Indonesia from '../assets/indo.jpg'
import { Link } from 'react-router-dom'

const TopDestinationCountrys = () => {
    return (
        <div className="container mx-auto px-5 my-5 md:my-10 lg:my-12">
        <h1 className="text-center font-bold text-3xl my-5 md:my-10 lg:my-12">Best country's Tourist Spots</h1>
         <div className="grid  md:grid-cols-8 gap-4">
   
         <div className="md:col-span-4 bg-cover w-full bg-no-repeat bg-center hover:scale-95 transition-transform ease-in cursor-pointer relative  rounded-xl"
            style={{
              backgroundImage: `url(${bangladesh})`,
              paddingBottom: "50%",
            }}
            
          >
          
          <Link to={"/spotsByCountry/Bangladesh"}><h1 className="absolute inset-0 flex items-center justify-center text-white font-bold text-3xl">Bangladesh</h1></Link>
            
          </div>

         <div className="md:col-span-4 bg-cover  bg-no-repeat bg-center w-full hover:scale-95 transition-transform ease-in cursor-pointer relative rounded-xl"
            style={{
              backgroundImage: `url(${Thailand})`,
              paddingBottom: "50%",
            }}
          >
            <Link to={"/spotsByCountry/Thailand"}><h1  className="absolute inset-0 flex items-center justify-center text-white font-bold text-3xl">Thailand</h1></Link>
          </div>
    
         <div className="md:col-span-6 bg-cover  bg-no-repeat bg-center w-full hover:scale-95 transition-transform ease-in cursor-pointer relative rounded-xl"
            style={{
              backgroundImage: `url(${Malaysia})`,
              paddingBottom: "50%",
            }}
          >
            <Link to={"/spotsByCountry/Malaysia"}><h1  className="absolute inset-0 flex items-center justify-center text-white font-bold text-3xl">Malaysia</h1></Link>
          </div>
         <div className="md:col-span-2 bg-cover  bg-no-repeat bg-center w-full hover:scale-95 transition-transform ease-in cursor-pointer relative rounded-xl"
            style={{
              backgroundImage: `url(${Indonesia})`,
              paddingBottom: "50%",
            }}
          >
            <Link to={"/spotsByCountry/Indonesia"}><h1  className="absolute inset-0 flex items-center justify-center text-white font-bold text-3xl">Indonesia</h1></Link>
          </div>
         <div className="md:col-span-3 bg-cover  bg-no-repeat bg-center w-full hover:scale-95 transition-transform ease-in cursor-pointer relative rounded-xl"
            style={{
              backgroundImage: `url(${Cambodia})`,
              paddingBottom: "50%",
            }}
          >
           <Link to={"/spotsByCountry/Cambodia"}> <h1 className="absolute inset-0 flex items-center justify-center text-white font-bold text-3xl">Cambodia</h1></Link>
          </div>
         <div className="md:col-span-5 bg-cover bg-no-repeat bg-center w-full hover:scale-95 transition-transform ease-in cursor-pointer relative rounded-xl"
            style={{
              backgroundImage: `url(${Vietnam})`,
              paddingBottom: "50%",
            }}
          >
            <Link to={"/spotsByCountry/Vietnam"}><h1  className="absolute inset-0 flex items-center justify-center text-white font-bold text-3xl">Vietnam</h1></Link>
          </div>
         </div>
      </div>
    );
};

export default TopDestinationCountrys;