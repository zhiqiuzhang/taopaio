import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick'
import './Slide.scss';
// 主页轮播组件
const PosterSlide = ({ data }) => {
	const settings = {
      dots: true,
      autoplay: true,
      className: 'posterSlide',
      dotsClass: 'posterSlide-dots'
    };
	return (
			<Slider {...settings}>
			{
				data.map(itemimg => {
					return(
						<div key={itemimg.image}>
							<img className="posterSlide-img" src={itemimg.image} alt=""/>
				    	</div>
						)
				})
			}
			</Slider>
	)
}

Slider.propsTypes = {
	data: PropTypes.array.isRequired
}
export default PosterSlide;