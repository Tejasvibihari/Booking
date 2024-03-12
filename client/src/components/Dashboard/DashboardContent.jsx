import ShortCard from './ShortCard'
// import useSelector from 'react-redux'
export default function DashboarContent() {
    // const { currentAdmin } = useSelector(state => state.admin)

    return (
        <>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                <ShortCard
                    key="1"
                    title="Total Hotel"
                    value="45"
                    link="#"
                    linkTitle="View Booking"
                />
                <ShortCard
                    key="2"
                    title="Total Booking"
                    value="45"
                    link="#"
                    linkTitle="View Booking"
                />
                <ShortCard
                    key="3"
                    title="Total Booking"
                    value="45"
                    link="#"
                />
                <ShortCard
                    key="4"
                    title="Total Booking"
                    value="45"
                    link="#"
                />
            </div></>
    )
}
