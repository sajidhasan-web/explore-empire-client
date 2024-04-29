import {useLoaderData} from 'react-router-dom'
import TouristSpotCard from '../components/TouristSpotCard/TouristSpotCard';

const PecificCountrysSpots = () => {

    const data = useLoaderData()

    return (
        <div className='container mx-auto px-5 my-5 md:my-10 lg:my-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    data.map(spot => <TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>)  
                }
            </div>
        </div>
    );
};

export default PecificCountrysSpots;