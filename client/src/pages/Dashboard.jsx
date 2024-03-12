import DashboarContent from '../components/Dashboard/DashboardContent';
import Table from '../components/Dashboard/Table';
import AdminDashboard from './AdminDashboard';



export default function Dashboard() {
    return (
        <>
            <AdminDashboard>
                <DashboarContent />
                <Table />
            </AdminDashboard>
        </>
    )
}
