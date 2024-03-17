
import AddRoomForm from '../components/Dashboard/AddRoomForm'
import AdminDashboard from './AdminDashboard'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
// import productCard from '../components/Dashboard/productCard'

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import WifiIcon from '@mui/icons-material/Wifi';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TvIcon from '@mui/icons-material/Tv';
import PoolIcon from '@mui/icons-material/Pool';
import SpaIcon from '@mui/icons-material/Spa';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import RoomCard from '../components/Dashboard/RoomCard'

export default function ManageRoom() {
    const { id } = useParams();
    const [product, setproduct] = useState(null);


    useEffect(() => {
        const fetchproduct = async () => {
            try {
                const response = await axios.get(`/api/hotel/getroom/${id}`);
                setproduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchproduct();
    }, [id]);
    useEffect(() => {
        console.log(product);
    }, [product]);


    return (
        <div>
            <AdminDashboard>
                <AddRoomForm />
                {product && product.map((room, index) => {
                    return (
                        <RoomCard
                            key={index}
                            roomName={room.roomType}
                            poolPrice={room.poolPrice}
                            acPrice={room.acPrice}
                            roomImage={`http://localhost:3000/uploads/${room.roomImage}`}
                            wifi={
                                room.amenities.wifi ? <div><span className='text-sm text-gray-700'><WifiIcon className='' sx={{ fontSize: 25 }} />Free Wifi</span><span className='text-sm text-gray-700 px-2'>|</span></div> : null
                            }
                            tv={
                                room.amenities.tv ? <div><span className='text-sm text-gray-700'><TvIcon className='' sx={{ fontSize: 25 }} />T.V</span><span className='text-sm text-gray-700 px-2'>|</span></div> : null
                            }
                            swimmingPool={
                                room.amenities.swimmingPool ? <div><span className='text-sm text-gray-700'><PoolIcon className='' sx={{ fontSize: 25 }} />Swimming Pool</span><span className='text-sm text-gray-700 px-2'>|</span></div > : null
                            }
                            parking={
                                room.amenities.parking ? <div><span className='text-sm text-gray-700'><DirectionsCarIcon className='' sx={{ fontSize: 25 }} />Parking</span><span className='text-sm text-gray-700 px-2'>|</span></div> : null
                            }
                            ac={
                                room.amenities.ac ? <div><span className='text-sm text-gray-700'><AcUnitIcon className='' sx={{ fontSize: 25 }} />A.C</span><span className='text-sm text-gray-700 px-2'>|</span></div> : null
                            }
                            spa={
                                room.amenities.spa ? <div><span className='text-sm text-gray-700'><SpaIcon className='' sx={{ fontSize: 25 }} />Spa</span><span className='text-sm text-gray-700 px-2'>|</span></div> : null
                            }
                            restaurant={
                                room.amenities.restaurant ? <div><span className='text-sm text-gray-700'><RestaurantIcon className='' sx={{ fontSize: 25 }} />Restaurant</span><span className='text-sm text-gray-700 px-2'>|</span></div> : null
                            }
                            gym={
                                room.amenities.gym ? <div><span className='text-sm text-gray-700'><FitnessCenterIcon className='' sx={{ fontSize: 25 }} />Gym</span><span className='text-sm text-gray-700 px-2'>|</span></div> : null
                            }
                        />
                    )
                })}
            </AdminDashboard>
        </div>
    )
}
