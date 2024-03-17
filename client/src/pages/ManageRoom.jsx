
import AddRoomForm from '../components/Dashboard/AddRoomForm'
import AdminDashboard from './AdminDashboard'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import HotelCard from '../components/Dashboard/HotelCard'

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import WifiIcon from '@mui/icons-material/Wifi';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TvIcon from '@mui/icons-material/Tv';
import PoolIcon from '@mui/icons-material/Pool';
import SpaIcon from '@mui/icons-material/Spa';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Chip from '@mui/material/Chip';

export default function ManageRoom() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    console.log(id)
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/api/hotel/getroom/${id}`);
                setProduct(response.data);
                console.log(response)
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);
    return (
        <div>
            <AdminDashboard>
                <AddRoomForm />

            </AdminDashboard>
        </div>
    )
}
