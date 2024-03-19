// import React from 'react'

import CardSlider from './ui/CardSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryTab from './CategoryTab';
// import { useState } from 'react';



//Bellow The Hero Section
export default function MainNavigation() {

    return (
        <>
            <CategoryTab />
            <div className='border-[1px] max-w-5xl mx-auto mt-7 rounded-md shadow-md'>
                <div className='grid md:grid-cols-3 gap-3 grid-cols-1 p-5 lux'>
                    <div className=''>
                        <h1>
                            <span className='text-2xl font-bold'>Trending </span>
                        </h1>
                    </div>
                    <div className='col-span-2'>
                        <div className=''>
                            <CardSlider />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
