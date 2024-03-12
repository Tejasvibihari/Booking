import HomeWorkSharpIcon from '@mui/icons-material/HomeWorkSharp';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import MapIcon from '@mui/icons-material/Map';
import StarIcon from '@mui/icons-material/Star';
import WifiIcon from '@mui/icons-material/Wifi';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TvIcon from '@mui/icons-material/Tv';
import PoolIcon from '@mui/icons-material/Pool';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
// import Propstypes from 'prop-types';

export default function HotelCard() {
    return (
        <>
            <div className='mt-10 max-w-7xl mx-auto shadow-lg rounded-md overflow-hidden'>
                <div className='grid grid-cols-1 grid-col-1 gap-5 md:grid-cols-3 '>
                    <div>
                        <img src="./img/c1.jpeg" className="" />
                    </div>
                    <div className="col-span-2 flex flex-col p-5">
                        <div>
                            <h1 className='text-xl font-semibold'>Hotel Name</h1>

                            <div className='flex flex-row justify-between items-center'>
                                <h1 className="text-gray-500 text-sm">City State</h1>
                                <a href="#">
                                    <button className='bg-[#1C7C54] text-white rounded-sm p-2 mt-2'><MapIcon className='pr-1' />View on Map</button>
                                </a>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <div className='flex flex-row rounded-md gap-2 items-center'>
                                <h1 className="text-sm p-1 text-white bg-[#2eef64] rounded-md">4.6 <StarIcon sx={{ fontSize: 15 }} /></h1>
                                <span className='text-sm text-gray-500'>|</span>
                                <span className='text-sm text-gray-500'>(197 Rating)</span>
                                <span className='text-sm text-gray-500'>|</span>
                                <span className='text-sm text-gray-500'>Excelent</span>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <div className='flex flex-row rounded-md gap-2 items-center'>
                                <span className='text-sm text-gray-700'><WifiIcon className='' sx={{ fontSize: 25 }} />Free Wifi</span>
                                <span className='text-sm text-gray-700'>|</span>
                                <span className='text-sm text-gray-700'><AcUnitIcon className='' sx={{ fontSize: 25 }} />A.C</span>
                                <span className='text-sm text-gray-700'>|</span>
                                <span className='text-sm text-gray-700'><TvIcon className='' sx={{ fontSize: 25 }} />T.V</span>
                                <span className='text-sm text-gray-700'>|</span>
                                <span className='text-sm text-gray-700'><PoolIcon className='' sx={{ fontSize: 25 }} />Swimming Pool</span>
                                <span className='text-sm text-gray-700'>|</span>
                                <span className='text-sm text-gray-700'><DirectionsCarIcon className='' sx={{ fontSize: 25 }} />Parking</span>
                            </div>
                        </div>
                        <div className='mt-10'>

                            <div className='flex flex-row justify-between items-center'>
                                <h1 className="text-black font-semibold text-xl">₹ 7000/-</h1>
                                <div className='flex flex-row gap-4'>
                                    <button className='bg-[#1C7C54] text-white rounded-sm p-2 mt-2'><HomeWorkSharpIcon className='pr-1' />Manage</button>
                                    <button className='bg-[#1C7C54] text-white rounded-sm p-2 mt-2'><RoomPreferencesIcon className='pr-1' />Manage Rooms</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div >

            </div >
        </>
    )
}
