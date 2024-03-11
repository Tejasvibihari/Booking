import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Avatar from '@mui/material/Avatar';
export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0); // Update state based on scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, []);
  console.log(currentUser);
  return (
    <>
      <header
        className={`bg-slate-200 fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${isSticky ? "bg-white shadow-md" : ""
          }`}
      >
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="hidden w-full text-gray-600 md:flex md:items-center">
              <nav className="flex items-center justify-between ml-6 text-lg">
                <Link
                  to="/"
                  className="text-black hover:text-[#1C7C54] mx-1"
                >
                  Home
                </Link>
              </nav>
            </div>
            <Link className="w-full text-[#B1CF5F] md:text-center text-2xl font-semibold">
              Booking
            </Link>
            <div className="flex items-center justify-end w-full">

              {currentUser ? <Link to="/userprofile"><Avatar alt={currentUser.rest.firstName} src={currentUser.rest.avatar} /></Link> : <Link to="/signin"><button className="w-40 h-10 text-black px-7 py-2 text-center bg-[#73E2A7] text-sm rounded-full hover:bg-transparent hover:text-white hover:border-[1px] border-white transition-all duration-300">
                Sign in
              </button> </Link>
              }


            </div>
          </div>
        </div>
      </header>
    </>
  );
}
