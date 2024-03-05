import Propstypes from 'prop-types'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function ShortCard({ title, value, link, linkTitle }) {
    // Date function for Dashboard
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date().toLocaleDateString('en-US', options);
    return (
        <>
            <div className='bg-white p-5 rounded-md shadow-md h-48'>
                <h1 className='text-1xl font-semibold text-[#173E2A]'>{title}</h1>
                <p className='text-4xl font-bold'>{value}</p>
                <p className='text-[#173E2A]'>{date}</p>
                <div className='flex flex-row-reverse justify-items-end mt-10'>
                    <a className='text-[#173E2A] font-semibold' target='_blank' rel="noreferrer"
                        href={link}>{linkTitle}<KeyboardArrowRightIcon /></a>
                </div>
            </div >
        </>
    )
}

ShortCard.propTypes = {
    title: Propstypes.string,
    value: Propstypes.number,
    link: Propstypes.string,
    linkTitle: Propstypes.string,
}

