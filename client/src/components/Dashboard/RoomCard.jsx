

import StarIcon from '@mui/icons-material/Star';


import Propstypes from 'prop-types';

export default function RoomCard({ roomName, poolPrice, acPrice, wifi, tv, swimmingPool, parking, ac, spa, restaurant, gym, roomImage }) {
    return (
        <>
            <div className='mt-10 max-w-7xl mx-auto shadow-lg rounded-md overflow-hidden'>
                <div className='grid grid-cols-1 grid-col-1 gap-5 md:grid-cols-3 '>
                    <div className='max-w-96 max-h-52'>
                        <img src={roomImage} className='w-fit h-fit' />
                    </div>
                    <div className="col-span-2 flex flex-col p-5">
                        <div>
                            <h1 className='text-xl font-semibold'>{roomName}</h1>
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
                                <h1 className="text-black font-semibold text-xl">Pool Price ₹ {poolPrice}/-</h1>
                                <h1 className="text-black font-semibold text-xl">A.C Price ₹ {acPrice}/-</h1>
                                {/* <div className='flex flex-row gap-4'>
                                    <button className='bg-[#1C7C54] text-white rounded-sm p-2 mt-2'><HomeWorkSharpIcon className='pr-1' />Manage</button>
                                    <a href={manageRoomLink}><button className='bg-[#1C7C54] text-white rounded-sm p-2 mt-2'><RoomPreferencesIcon className='pr-1' />Manage Rooms</button></a>
                                </div> */}
                            </div>
                        </div>

                    </div>
                </div >

            </div >
        </>
    )
}

RoomCard.propTypes = {
    roomName: Propstypes.string,
    poolPrice: Propstypes.number,
    acPrice: Propstypes.number,
    wifi: Propstypes.string,
    tv: Propstypes.string,
    swimmingPool: Propstypes.string,
    parking: Propstypes.string,
    ac: Propstypes.string,
    spa: Propstypes.string,
    restaurant: Propstypes.string,
    gym: Propstypes.string,
    roomImage: Propstypes.strings
}