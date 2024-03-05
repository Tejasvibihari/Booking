// import React, { Component } from "react";
import Slider from "react-slick";
import propstype from "prop-types";


function VerticalSlider({ rtl }) {
    const settings = {
        infinite: true,
        vertical: true,
        verticalSwiping: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 4,
        slidesToScroll: 1,
        rtl: rtl,
        beforeChange: function (currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        }
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src="./img/c1.jpeg" className="w-60 rounded-2xl" />
                </div>
                <div>
                    <img src="./img/c1.jpeg" className="w-60 rounded-2xl" />
                </div>
                <div>
                    <img src="./img/c1.jpeg" className="w-60 rounded-2xl" />
                </div>
            </Slider>
        </div>
    );
}

export default VerticalSlider;

VerticalSlider.propstype = {
    rtl: propstype.bool
};