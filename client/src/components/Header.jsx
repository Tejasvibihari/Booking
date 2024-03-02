import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0); // Update state based on scroll position
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
        };
    }, []);

    return (
        <>
            <header className={`bg-transparent fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${isSticky ? 'bg-white shadow-md' : ''}`}>
                <div className="container mx-auto px-6 py-3">
                    <div className="flex items-center justify-between">
                        <div className="hidden w-full text-gray-600 md:flex md:items-center">
                            <nav className="flex items-center justify-between ml-6 text-lg">
                                <Link to="/home" className="text-white hover:text-[#1C7C54] mx-1">
                                    Home
                                </Link>

                            </nav>
                        </div>
                        <Link className="w-full text-[#B1CF5F] md:text-center text-2xl font-semibold">
                            Booking
                        </Link>
                        <div className="flex items-center justify-end w-full">
                            <button className="text-black mx-4 px-6 py-2 bg-[#73E2A7] sm:mx-0">Sign in</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
