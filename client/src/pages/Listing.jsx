import AdminDashboard from "./AdminDashboard";
import AddHotelForm from "../components/Dashboard/AddHotelForm";
import HotelCard from "../components/Dashboard/HotelCard";

export default function Listing() {
    return (
        <>
            <AdminDashboard>
                <AddHotelForm />
                <HotelCard />
            </AdminDashboard></>
    )
}
