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
export default function Listing() {
    const { storeHotel } = useSelector((state) => state.hotel);
    return (
        <>
            <AdminDashboard>
                <AddHotelForm />
                {storeHotel.map((hotel, index) => {
                    return (
                        <HotelCard
                            key={index}
                            hotelName={hotel.hotelName}
                            city={hotel.city}
                            state={hotel.state}
                            basePrice={hotel.basePrice}
                            geolocation={hotel.geolocation}
                            wifi={
                                hotel.wifi ? <span className='text-sm text-gray-700'><WifiIcon className='' sx={{ fontSize: 25 }} />Free Wifi</span> : null}
                            tv={
                                hotel.tv ? <span className='text-sm text-gray-700'><TvIcon className='' sx={{ fontSize: 25 }} />T.V</span> : null}
                            swimmingPool={
                                hotel.swimmingPool ? <span className='text-sm text-gray-700'><PoolIcon className='' sx={{ fontSize: 25 }} />Swimming Pool</span> : null}
                            parking={
                                hotel.parking ? <span className='text-sm text-gray-700'><DirectionsCarIcon className='' sx={{ fontSize: 25 }} />Parking</span> : null}
                            ac={
                                hotel.ac ? <span className='text-sm text-gray-700'><AcUnitIcon className='' sx={{ fontSize: 25 }} />A.C</span> : null}
                            spa={
                                hotel.spa ? <span className='text-sm text-gray-700'><SpaIcon className='' sx={{ fontSize: 25 }} />Spa</span> : null}
                            restaurant={
                                hotel.restaurant ? <span className='text-sm text-gray-700'><RestaurantIcon className='' sx={{ fontSize: 25 }} />Restaurant</span> : null}
                            gym={
                                hotel.gym ? <span className='text-sm text-gray-700'><FitnessCenterIcon className='' sx={{ fontSize: 25 }} />Gym</span> : null}
                        />)
                })

                }
            </AdminDashboard ></>
    )
}
