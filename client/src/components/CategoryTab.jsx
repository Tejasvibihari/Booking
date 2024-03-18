import { useEffect, useState } from 'react'
import VerticalCard from './VerticalCard';
import ButtonGroup from '@mui/material-next/ButtonGroup';
import Button from '@mui/material-next/Button';
// import { EXAMPLES } from '../data.js';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import getHotel, { getHotels } from "../app/user/userHotelSlice";

export default function CategoryTab() {
    const dispatch = useDispatch();
    const { userHotels } = useSelector((state) => state.userHotels)
    const [selectedCategory, setSelectedCategory] = useState(hotels);
    function handleSelect(selectedButton) {
        setSelectedCategory(selectedButton);

    }

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const hotels = await axios.get('/api/user/gethotels');
                const room = await axios.get('/api/user/getroom');
                console.log(hotels.data);
                // const hoteData = await hotels.json();
                // console.log(hoteData);
                dispatch(getHotels(hotels.data))
            } catch (error) {
                console.log(error);
            }
        }
        fetchHotels();
    }, [])

    return (
        <>


            <div className="flex flex-row justify-center mt-10 mx-auto">
                <ButtonGroup variant="text" aria-label="Basic button group" className="border-[1px]">
                    <Button onClick={() => { handleSelect(hotels) }}><img src="./img/hotel.png" className='p-2' />
                        Hotel
                    </Button>
                    <Button onClick={() => { handleSelect(restaurants) }}><img src="./img/restaurant.png" className='p-2' />Restaurant</Button>
                    <Button onClick={() => { handleSelect(weakends) }}><img src="./img/holiday.png" className='p-2' />Weakend</Button>
                    <Button onClick={() => { handleSelect(sprituals) }}><img src="./img/spritual4.png" className='p-2' />Spritual</Button>
                    <Button onClick={() => { handleSelect(hillstations) }}><img src="./img/mountain.png" className='p-2' />Hillstation</Button>
                </ButtonGroup>
            </div >
            <div className='flex'>
                <div className='max-w-8xl bg-slate-50 mx-auto mt-5 my-5 p-5 border-[1px] rounded-md grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {userHotels.map((hotel, index) => {
                        return (
                            <div className='max-w-md' key="0">
                                <VerticalCard
                                    key={index}
                                    image={hotel.image}
                                    title={hotel.hotelName}
                                    content={hotel.description}
                                    rating={hotel.rating}
                                    discount={hotel.discount} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}


const hotels = [
    {
        id: 1,
        title: "Hotel Card1",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    },
    {
        id: 2,
        title: "Card1",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    },
    {
        id: 3,
        title: "Card1",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    },
    {
        id: 4,
        title: "Card1",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    },
    {
        id: 5,
        title: "Card1",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    },
    {
        id: 6,
        title: "Card1",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    }
];
const restaurants = [
    {
        id: 1,
        title: "Restaurent 1",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    },
    {
        id: 2,
        title: "Card1",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    },
    {
        id: 3,
        title: "Card1",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    },
    {
        id: 4,
        title: "Restaurent 4",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    },
    {
        id: 5,
        title: "Card1",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    },
    {
        id: 6,
        title: "Card1",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    }
];
const weakends = [
    {
        id: 1,
        title: "Weakend  Card1",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    },
    {
        id: 2,
        title: "Card1",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    },
    {
        id: 3,
        title: "Card1",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    },
    {
        id: 4,
        title: "Card1",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    },
    {
        id: 5,
        title: "Card1",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    },
    {
        id: 6,
        title: "Card1",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    }
];
const sprituals = [
    {
        id: 1,
        title: "Spritual Card1",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    },
    {
        id: 2,
        title: "Card1",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    },
    {
        id: 3,
        title: "Card1",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    },
    {
        id: 4,
        title: "Card1",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    },
    {
        id: 5,
        title: "Card1",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    },
    {
        id: 6,
        title: "Card1",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    }
];
const hillstations = [
    {
        id: 1,
        title: "Hill station Card1",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    },
    {
        id: 2,
        title: "Card1",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    },
    {
        id: 3,
        title: "Card1",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    },
    {
        id: 4,
        title: "Card1",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    },
    {
        id: 5,
        title: "Card1",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    },
    {
        id: 6,
        title: "Card1",
        content: "This is a description of the card.",
        image: "./img/c1.jpeg",
        rating: "3",
        discount: "75"
    }
]