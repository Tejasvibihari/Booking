// import React from 'react';
import PropsTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
// import Chip from '@mui/material/Chip';

const VerticalCard = ({ image, title, content, rating, discount }) => {
    return (
        <div className="flex items-start bg-white shadow-lg rounded-lg p-4 relative">
            <div className="absolute top-0 left-0 bg-red-500 text-white py-1 px-2 rounded-tr rounded-br text-sm">
                {discount}% off
            </div>
            <img className="w-[153px] rounded-lg" src={image} alt={title} />

            <div className="ml-4 flex-1 flex flex-col justify-between">
                <div>
                    <h2 className="text-xl font-bold mb-2">{title}</h2>
                    <div>
                        {/* <Chip label="Free Cancellation" className="bg-[#B1CF5F] text-white mr-2 mb-2" />
                        <Chip label="Breakfast" className="bg-[#B1CF5F] text-white mr-2 mb-2" />
                        <Chip label="Free Wifi" className="bg-[#B1CF5F] text-white mb-2" /> */}
                    </div>
                    <Rating name="read-only" value={rating} readOnly />
                </div>
                <div className=''>
                    <p className="text-gray-500">{content}</p>
                    <div className='flex flex-row items-end justify-end mt-4'>
                        <Link to="/" className="text-[#B1CF5F] ease-out duration-300 text-lg text-right font-semibold hover:text-black">VIEW DETAILS</Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default VerticalCard;

VerticalCard.propTypes = {
    image: PropsTypes.string.isRequired,
    title: PropsTypes.string.isRequired,
    content: PropsTypes.string.isRequired,
    rating: PropsTypes.string.isRequired,
    discount: PropsTypes.string.isRequired
};