import ShortCard from './ShortCard'
// import useSelector from 'react-redux'
export default function DashboarContent() {
    // const { currentAdmin } = useSelector(state => state.admin)
    return (
        <>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                <ShortCard
                    title="Total Booking"
                    value="45"
                    link="#"
                    linkTitle="View Booking"
                />
                <ShortCard
                    title="Total Booking"
                    value="45"
                    link="#"
                />
                <ShortCard
                    title="Total Booking"
                    value="45"
                    link="#"
                />
                <ShortCard
                    title="Total Booking"
                    value="45"
                    link="#"
                />
            </div></>
    )
}
