
import Dashboard from './AdminDashboard';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';

export default function AdminDetail() {
    const { currentAdmin } = useSelector(state => state.admin);
    return (
        <div>
            <Dashboard>
                <div className=''>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                        <div className='flex flex-col items-center'>
                            <div>
                                <Avatar
                                    alt={currentAdmin.firstName}
                                    src={currentAdmin.avatar}
                                    sx={{ width: 250, height: 250 }}
                                />
                            </div>
                        </div>
                        <div className='flex flex-col col-span-2'>
                            <div className='flex flex-row items-center'>
                                <span className='p-5 text-slate-900 font-semibold'>Name:</span> <h1 className='p-5 text-slate-800 font-semibold'>{currentAdmin.firstName} {currentAdmin.lastName}</h1>
                            </div>
                            <div className='flex flex-row items-center'>
                                <span className='p-5 text-slate-900 font-semibold'>Email:</span> <h1 className='p-5 text-slate-800 font-semibold'>{currentAdmin.email}</h1>
                            </div>
                            <div className='flex flex-row items-center'>
                                <span className='p-5 text-slate-900 font-semibold'>Company Name:</span>  <h1 className='p-5 text-slate-800 font-semibold'>{currentAdmin.companyName}</h1>
                            </div>

                        </div>
                    </div>
                </div>




            </Dashboard >
        </div >
    )
}
