import AdminDashboard from "./AdminDashboard";
import AddHotelForm from "../components/Dashboard/AddHotelForm";
import HotelCard from "../components/Dashboard/HotelCard";
import { useSelector } from "react-redux";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import WifiIcon from '@mui/icons-material/Wifi';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TvIcon from '@mui/icons-material/Tv';
import PoolIcon from '@mui/icons-material/Pool';
import SpaIcon from '@mui/icons-material/Spa';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Chip from '@mui/material/Chip';





export default function Listing() {
    const { storeHotel } = useSelector((state) => state.hotel);
    return (
        <>
            <AdminDashboard>
                <AddHotelForm />
                {storeHotel.map((hotel, index) => {
                    return (
                        < HotelCard
                            key={index}
                            hotelName={hotel.hotelName}
                            city={hotel.city}
                            state={hotel.state}
                            basePrice={hotel.basePrice}
                            geolocation={hotel.geolocation}
                            hotelCategory={hotel.hotelCategory === 'luxury' ? <Chip
                                avatar={<img alt="Natacha" src="./img/luxury.png" />}
                                label="Luxury"
                                color="warning"
                                variant="outlined"
                            /> : <Chip
                                avatar={<img alt="Budget" src="./img/budget48.png" />}
                                label="Budget"
                                variant="outlined"
                            />}
                            wifi={
                                hotel.amenities.wifi ? <div><span className='text-sm text-gray-700'><WifiIcon className='' sx={{ fontSize: 25 }} />Free Wifi</span><span className='text-sm text-gray-700 px-2'>|</span></div> : null
                            }
                            tv={
                                hotel.amenities.tv ? <div><span className='text-sm text-gray-700'><TvIcon className='' sx={{ fontSize: 25 }} />T.V</span><span className='text-sm text-gray-700 px-2'>|</span></div> : null
                            }
                            swimmingPool={
                                hotel.amenities.swimmingPool ? <div><span className='text-sm text-gray-700'><PoolIcon className='' sx={{ fontSize: 25 }} />Swimming Pool</span><span className='text-sm text-gray-700 px-2'>|</span></div > : null
                            }
                            parking={
                                hotel.amenities.parking ? <div><span className='text-sm text-gray-700'><DirectionsCarIcon className='' sx={{ fontSize: 25 }} />Parking</span><span className='text-sm text-gray-700 px-2'>|</span></div> : null
                            }
                            ac={
                                hotel.amenities.ac ? <div><span className='text-sm text-gray-700'><AcUnitIcon className='' sx={{ fontSize: 25 }} />A.C</span><span className='text-sm text-gray-700 px-2'>|</span></div> : null
                            }
                            spa={
                                hotel.amenities.spa ? <div><span className='text-sm text-gray-700'><SpaIcon className='' sx={{ fontSize: 25 }} />Spa</span><span className='text-sm text-gray-700 px-2'>|</span></div> : null
                            }
                            restaurant={
                                hotel.amenities.restaurant ? <div><span className='text-sm text-gray-700'><RestaurantIcon className='' sx={{ fontSize: 25 }} />Restaurant</span><span className='text-sm text-gray-700 px-2'>|</span></div> : null
                            }
                            gym={
                                hotel.amenities.gym ? <div><span className='text-sm text-gray-700'><FitnessCenterIcon className='' sx={{ fontSize: 25 }} />Gym</span><span className='text-sm text-gray-700 px-2'>|</span></div> : null
                            }
                        />)
                })

                }
            </AdminDashboard ></>
    )
}
