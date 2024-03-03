
import Slider from "react-slick";
// import PropsType from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BasicCard from "../BasicCard";

export default function CardSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    // slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-container ">
            <Slider {...settings}>
                <div>
                    <div className="flex justify-center">
                        <BasicCard
                            image="./img/c1.jpeg" title="Hello World 1" description="sdftvghjnknhbgfdrtfgybhjngfdxfcgbh drvgfbhgftrdesw edrt" />
                    </div>
                </div>
                <div>
                    <div className="flex justify-center">
                        <BasicCard
                            image="./img/c1.jpeg" title="Hello World 1" description="sdftvghjnknhbgfdrtfgybhjngfdxfcgbh drvgfbhgftrdesw edrt" />
                    </div>
                </div>
                <div>
                    <div className="flex justify-center">
                        <BasicCard
                            image="./img/c1.jpeg" title="Hello World 1" description="sdftvghjnknhbgfdrtfgybhjngfdxfcgbh drvgfbhgftrdesw edrt" />
                    </div>
                </div>
                <div>
                    <div className="flex justify-center">
                        <BasicCard
                            image="./img/c1.jpeg" title="Hello World 1" description="sdftvghjnknhbgfdrtfgybhjngfdxfcgbh drvgfbhgftrdesw edrt" />
                    </div>
                </div>

            </Slider>
        </div>
    );
}
