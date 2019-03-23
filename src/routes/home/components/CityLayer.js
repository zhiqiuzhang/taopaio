import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Citylayer.scss';

class CityLayer extends Component {
  render() {
    return (
      <div className="cityLayer">
      	<div className="cityLayer-title">
      		<div className="cityLayer-close">关闭</div>
      		选择城市
      	</div>
      	<div className="cityLayer-content">
      		<div className="cityBlock" id="当前">
      			<div className="cityBlock-label">当前</div>
      			<div className="cityBlock-wrap">
					<div className="cityBlock-item">开封</div>
      			</div>
      		</div>
      		<div className="cityGps" id="GPS">
      			<div className="cityGps-label">GPS</div>
      			<div className="cityGps-wrap">
					<div className="cityGps-item">许昌</div>
      			</div>
      		</div>
      		<div className="cityHot" id="热门">
      			<div className="cityHot-label">热门</div>
      			<div className="cityHot-wrap">
      				<ul>
						<li className="cityHot-item">北京</li>
						<li className="cityHot-item">上海</li>
						<li className="cityHot-item">广州</li>
						<li className="cityHot-item">深圳</li>
						<li className="cityHot-item">成都</li>
						<li className="cityHot-item">武汉</li>
						<li className="cityHot-item">杭州</li>
						<li className="cityHot-item">重庆</li>
      				</ul>
					
      			</div>
      		</div>

      		<div className="cityList" id="A">
      			<div className="cityList-label">A</div>
      			<ul className="cityList-wrap">
					<li className="cityList-item">阿坝</li>
					<li className="cityList-item">阿克苏</li>
					<li className="cityList-item">阿坝</li>
					<li className="cityList-item">阿克苏</li>
					<li className="cityList-item">阿坝</li>
					<li className="cityList-item">阿克苏</li>
					<li className="cityList-item">阿坝</li>
					<li className="cityList-item">阿克苏</li>
      			</ul>
      		</div>


      	</div>
      	<div className="cityLayer-index">
      		<ul>
      			<li>
      				<a href="#当前">当前</a>
      			</li>
      			<li>
      				<a href="#GPS">GPS</a>
      			</li>
      			<li>
      				<a href="#热门">热门</a>
      			</li>
      			<li>
      				<a href="#A">A</a>
      			</li>
      		</ul>
      	</div>

        	
        	
      </div>
    );
  }
}

export default CityLayer;
