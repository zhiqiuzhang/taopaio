import React from 'react';
import PropTypes from 'prop-types';
import './Movieitem.scss';

const MovieItem = () => {
	return (
		<div className="movieItem">
			<div className="movieItem-poster">
				<img src="/source/movie/asset1.jpg" />
			</div>
			<div className="movieItem-detail">
				<h3 className="movieItem-title">红海行动</h3>
				<div className="movieItem-rate">淘票票评分 <span>9.3</span></div>
				<div className="movieItem-director">导演：林超贤</div>
				<div className="movieItem-actor">主演：丁娜 海清</div>
				<div className="movieItem-tag">
					<span className="tTag tTag-red">今日最佳</span>
					<span className="tTag tTag-blue">口碑最好</span>
				</div>
			</div>
			<div className="movieItem-buy">
				<div className="movieItem-buyBtn tBtn">购票</div>
				<div className="movieItem-buyPrice">9.9</div>
			</div>
		</div>
	)
}

MovieItem.PropsTypes = {
	
}
export default MovieItem;