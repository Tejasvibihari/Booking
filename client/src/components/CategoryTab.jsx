// import { useState } from 'react'
import VerticalCard from './VerticalCard';
import ButtonGroup from '@mui/material-next/ButtonGroup';
import Button from '@mui/material-next/Button';
// import { EXAMPLES } from '../data.js';

export default function CategoryTab() {
    // const [selectedCategory, setSelectedCategory] = useState('hotel');
    function handleSelect(selectedButton) {
        // setSelectedCategory(selectedButton);
        console.log(selectedButton);

    }
    return (
        <>


            <div className="flex flex-row justify-center mt-10 mx-auto">
                <ButtonGroup variant="text" aria-label="Basic button group" className="border-[1px]">
                    <Button onClick={() => { handleSelect("hotel") }}><img src="./img/hotel.png" className='p-2' />
                        Hotel
                    </Button>
                    <Button onClick={() => { handleSelect("restaurants") }}><img src="./img/restaurant.png" className='p-2' />Restaurant</Button>
                    <Button onClick={() => { handleSelect("weakends") }}><img src="./img/holiday.png" className='p-2' />Weakend</Button>
                    <Button onClick={() => { handleSelect("sprituals") }}><img src="./img/spritual4.png" className='p-2' />Spritual</Button>
                    <Button onClick={() => { handleSelect("hillstations") }}><img src="./img/mountain.png" className='p-2' />Hillstation</Button>
                </ButtonGroup>
            </div >
            <div className='flex'>
                <div className='max-w-8xl bg-slate-50 mx-auto mt-5 my-5 p-5 border-[1px] rounded-md grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='max-w-md'>
                        <VerticalCard
                            image="./img/c1.jpeg"
                            title="Card1"
                            content="This is a description of the card."
                            rating="3"
                            discount="75" />
                        {/* <VerticalCard
                            title={EXAMPLES[selectedCategory].hotel1.title}
                            image={EXAMPLES[selectedCategory].hotel1.image}
                            content={EXAMPLES[selectedCategory].hotel1.content}
                            rating={EXAMPLES[selectedCategory].hotel1.rating}
                            discount={EXAMPLES[selectedCategory].hotel1.discount} /> */}
                    </div>

                </div>
            </div>
        </>
    )
}
