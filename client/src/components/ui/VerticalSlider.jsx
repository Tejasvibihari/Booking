// import React, { Component } from "react";
import Slider from "react-slick";
import PropTypes from 'prop-types';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "green" }}
            onClick={onClick}
        />
    );
}
function VerticalSlider({ rtl }) {
    const settings = {
        infinite: true,
        vertical: true,
        // lazyLoad: true,
        verticalSwiping: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 4,
        slidesToScroll: 1,
        rtl: rtl,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: function (currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        }
    };
    return (
        <div className="slider-container">
            <Slider {...settings} className="slider-item slider-item2">
                <div >
                    <img src="./img/c1.jpeg" className="w-60 rounded-2xl" />
                </div>
                <div>
                    <img src="./img/c2.jpeg" className="w-60 rounded-2xl" />
                </div>
                <div >
                    <img src="./img/c3.jpeg" className="w-60 rounded-2xl" />
                </div>
                <div >
                    <img src="./img/c4.jpeg" className="w-60 rounded-2xl" />
                </div>
                <div >
                    <img src="./img/c5.jpeg" className="w-60 rounded-2xl" />
                </div>
            </Slider>
        </div>
    );
}

export default VerticalSlider;

VerticalSlider.propTypes = {
    rtl: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,

};

SampleNextArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,

};
SamplePrevArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,

};