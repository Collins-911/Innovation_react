import React from "react";
import '../css/carousel.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../assets/slider-1.jpg"
import slider2 from "../assets/slider-2.jpg"
import slider3 from "../assets/slider-3.jpg"
import slider4 from "../assets/slider-4.jpg"
import slider5 from "../assets/slider-5.jpg"




export default function Carousel(){
	const settings = {
    	infinite: true,
    	speed: 700,
   	 	slidesToShow: 1,
    	slidesToScroll: 1,
    	autoplay: true,
    	autoplaySpeed: 4000,
  	};

  	return (
    	<>
    		<Slider {...settings}>
      			<div className="slider"><img src={slider1} alt="Slide 1" /></div>
      			<div className="slider"><img src={slider2} alt="Slide 2" /></div>
      			<div className="slider"><img src={slider3} alt="Slide 3" /></div>
      			<div className="slider"><img src={slider4} alt="Slide 4" /></div>
      			<div className="slider"><img src={slider5} alt="Slide 5" /></div>
    		</Slider>
    	</>
  	);
};
