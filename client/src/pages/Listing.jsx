import AdminDashboard from "./AdminDashboard";
import AddHotelForm from "../components/Dashboard/AddHotelForm";
import HotelCard from "../components/Dashboard/HotelCard";
import { useSelector } from "react-redux";


export default function Listing() {
    const { storeHotel } = useSelector((state) => state.hotel);
    console.log(storeHotel);
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
                        />)
                })

                }
            </AdminDashboard></>
    )
}
