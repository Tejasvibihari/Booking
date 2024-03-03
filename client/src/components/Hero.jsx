// import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import TypewriterEffectSmoothDemo from './ui/TypewriterEffectSmoothDemo';


export default function Hero() {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

    return (
        <div className="embla overflow-hidden w-full h-screen" ref={emblaRef}>
            {/* Adjust height as needed */}

            <div className="embla__container flex">

                <div className="embla__slide">
                    <div className="relative">
                        <img
                            src="./img/c1.jpeg"
                            alt="Slide 1"
                            className="object-cover w-full h-screen"
                        />
                        <div className="absolute flex mx-auto items-center justify-center inset-0 bg-black opacity-75 text-white text-4xl font-bold text-center">
                            <TypewriterEffectSmoothDemo />
                        </div>
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="relative">
                        <img
                            src="./images/c2.jpeg"
                            alt="Slide 1"
                            className="object-cover w-full h-screen"
                        />
                        <div className="absolute flex mx-auto items-center justify-center inset-0 bg-black opacity-75 text-white text-4xl font-bold text-center">
                            <TypewriterEffectSmoothDemo />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
