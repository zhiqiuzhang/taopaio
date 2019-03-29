import React from 'react';
import PropTypes from 'prop-types';
import './Movieitem.scss';
// 主页电影列表组件
const MovieItem = ({ data }) => {
	return (
		<div className="movieItem">
			<div className="movieItem-poster">
				<img src={data.poster} />
			</div>
			<div className="movieItem-detail">
				<h3 className="movieItem-title">{data.name}</h3>
				<div className="movieItem-rate">淘票票评分 <span>{data.score}</span></div>
				<div className="movieItem-director">导演：{data.director}</div>
				{ data.actor && <div className="movieItem-actor">主演：{data.actor}</div>}
				<div className="movieItem-tag">
					{
						data.tags.map((tag, i)=>{
							if(i%2){
								return <span className="tTag tTag-red" key={tag}>{tag}</span>;
							}
							return <span className="tTag tTag-blue" key={tag}>{tag}</span>
						})	
					}
				</div>
			</div>
			<div className="movieItem-buy">
				<div className="movieItem-buyBtn tBtn">购票</div>
				<div className="movieItem-buyPrice">9.9</div>
			</div>
		</div>
	)
}

MovieItem.propsTypes = {
	data: PropTypes.object.isRequired
}
export default MovieItem;