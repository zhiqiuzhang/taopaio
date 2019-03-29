import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Citylayer.scss';
import request from '../../../helpers/request'

class CityLayer extends Component {

  state = {
    hot:[], //热门城市
    all:{}// 全部城市
  }
  componentWillMount() {
    this.getCity();
  }
  getCity = async () => {
    const data = await request('/city');
    const {hot, all} = data;
    console.log(data);
    this.setState({
      hot,
      all
    })
  }

  render() {
    const {onClose, selectCity} = this.props;
    const {hot, all} = this.state;
    const allKeys = Object.keys(all);
    console.log(allKeys);
    return (
      <div className="cityLayer">
      	<div className="cityLayer-title">
      		<div className="cityLayer-close" onClick={onClose}>关闭</div>
      		选择城市
      	</div>
      	<div className="cityLayer-content">
      		<div className="cityBlock" id="当前">
      			<div className="cityBlock-label">当前</div>
      			<div className="cityBlock-wrap">
					<div className="cityBlock-item" onClick={() => selectCity('开封')}>开封</div>
      			</div>
      		</div>
      		<div className="cityGps" id="GPS">
      			<div className="cityGps-label">GPS</div>
      			<div className="cityGps-wrap">
					<div className="cityGps-item" onClick={() => selectCity('许昌')}>许昌</div>
      			</div>
      		</div>
      		<div className="cityHot" id="热门">
      			<div className="cityHot-label">热门</div>
      			<div className="cityHot-wrap">
      				<ul>
              {
                hot.map(cityname => {
                  return(
                    <li className="cityHot-item" key={cityname.id} onClick={() => selectCity(cityname.regionName)}>{cityname.regionName}</li>
                  )
                })
              }
      				</ul>
					
      			</div>
      		</div>

          {
            allKeys.map(itemkeys => {
              const allcity = all[itemkeys];
              return(
              <div className="cityList" id={itemkeys} key={itemkeys}>
                <div className="cityList-label">{itemkeys}</div>
                <ul className="cityList-wrap">
                  {
                    allcity.map(cityitem => {
                      return(
                        <li className="cityList-item" key={cityitem.id} onClick={() => selectCity(cityitem.regionName)}>{cityitem.regionName}</li>
                      )
                    })
                  }
                </ul>
              </div>
                )
            })
        }
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
            {
              allKeys.map(num => {
                return(
                    <li key={num}>
                      <a href={`#${num}`}>{num}</a>
                    </li>
                  )
              })
            }
      		</ul>
      	</div>

        	
        	
      </div>
    );
  }
}
CityLayer.propsTypes = {
  onClose: PropTypes.func.isRequired,
  selectCity: PropTypes.func.isRequired
}

export default CityLayer;
