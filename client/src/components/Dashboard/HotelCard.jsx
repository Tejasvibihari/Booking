
import MapIcon from '@mui/icons-material/Map';
import StarIcon from '@mui/icons-material/Star';


import HomeWorkSharpIcon from '@mui/icons-material/HomeWorkSharp';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';

import Propstypes from 'prop-types';

export default function HotelCard({ hotelName, city, state, basePrice, geolocation, wifi, tv, swimmingPool, parking, ac, spa, restaurant, gym, hotelCategory, manageRoomLink, image }) {
    return (
        <>
            <div className='mt-10 max-w-7xl mx-auto shadow-lg rounded-md overflow-hidden'>
                <div className='grid grid-cols-1 grid-col-1 gap-5 md:grid-cols-3 '>
                    <div>
                        <img src={image} className="" />
                    </div>
                    <div className="col-span-2 flex flex-col p-5">
                        <div>
                            <h1 className='text-xl font-semibold'>{hotelName}</h1>

                            <div className='flex flex-row justify-between items-center'>
                                <h1 className="text-gray-500 text-sm">{city}, {state}</h1>
                                <a href={geolocation}>
                                    <button className='bg-[#1C7C54] text-white rounded-sm p-2 mt-2'><MapIcon className='pr-1' />View on Map</button>
                                </a>
                            </div>
                        </div>
                        <div className='mt-1'>
                            <div className='flex flex-row rounded-md gap-2 items-center justify-between'>
                                <div>
                                    <span className="text-sm p-1 text-white bg-[#2eef64] rounded-md">4.6 <StarIcon sx={{ fontSize: 15 }} /></span>
                                    <span className='text-sm text-gray-500'> | </span>
                                    <span className='text-sm text-gray-500'>(197 Rating)</span>
                                    <span className='text-sm text-gray-500'> | </span>
                                    <span className='text-sm text-gray-500'>Excelent</span>
                                </div>
                                <div className=''>
                                    {hotelCategory}
                                </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <div className='flex flex-row rounded-md gap-2 items-center'>
                                {wifi}
                                {tv}
                                {swimmingPool}
                                {parking}
                                {ac}
                                {spa}
                                {restaurant}
                                {gym}
                            </div>
                        </div>
                        <div className='mt-10'>

                            <div className='flex flex-row justify-between items-center'>
                                <h1 className="text-black font-semibold text-xl">₹ {basePrice}/-</h1>
                                <div className='flex flex-row gap-4'>
                                    <button className='bg-[#1C7C54] text-white rounded-sm p-2 mt-2'><HomeWorkSharpIcon className='pr-1' />Manage</button>
                                    <a href={manageRoomLink}><button className='bg-[#1C7C54] text-white rounded-sm p-2 mt-2'><RoomPreferencesIcon className='pr-1' />Manage Rooms</button></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div >

            </div >
        </>
    )
}

HotelCard.propTypes = {
    hotelName: Propstypes.string,
    city: Propstypes.string,
    state: Propstypes.string,
    basePrice: Propstypes.number,
    geolocation: Propstypes.string,
    wifi: Propstypes.string,
    tv: Propstypes.string,
    swimmingPool: Propstypes.string,
    parking: Propstypes.string,
    ac: Propstypes.string,
    spa: Propstypes.string,
    restaurant: Propstypes.string,
    gym: Propstypes.string,
    hotelCategory: Propstypes.string,
    manageRoomLink: Propstypes.string,
    image: Propstypes.string

}