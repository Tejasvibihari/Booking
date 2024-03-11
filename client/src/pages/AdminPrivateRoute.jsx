import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'




export default function UserPrivateRoute() {
    const { currentAdmin } = useSelector(state => state.admin);

    return (

        currentAdmin ? <Outlet /> : <Navigate to="/adminsignin" />

    )

}