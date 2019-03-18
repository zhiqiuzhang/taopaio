import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick'
import './Slide.scss';

const PosterSlide = ({ data }) => {
	const settings = {
      dots: true,
      autoplay: true,
      className: 'posterSlide',
      dotsClass: 'posterSlide-dots'
    };
	return (
			<Slider {...settings}>
				<div>
					<img className="posterSlide-img" src="/source/slide/slide1.jpg" alt=""/>
				</div>
				<div>
					<img className="posterSlide-img" src="/source/slide/slide2.jpg" alt=""/>
				</div>
				<div>
					<img className="posterSlide-img" src="/source/slide/slide3.jpg" alt=""/>
				</div>
				<div>
					<img className="posterSlide-img" src="/source/slide/slide4.jpg" alt=""/>
				</div>
				<div>
					<img className="posterSlide-img" src="/source/slide/slide5.jpg" alt=""/>
				</div>
			</Slider>
	)
}

Slider.PropsTypes = {
	data: PropTypes.array.isRequired
}
export default PosterSlide;