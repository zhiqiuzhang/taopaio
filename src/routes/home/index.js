import React, { Component } from 'react';
import './index.scss';
import '../../commen.scss';
import TopBar from './components/TopBar'
import PosterSlide from './components/Slide'
import MovieItem from './components/MovieItem'
import CityLayer from './components/CityLayer'
import TabMenu from '../../components/TabMenu'
import RenderToBody from '../../components/RenderToBody'
import request from '../../helpers/request'

class Home extends Component {

  state = {
  	city: '', // 城市
  	poster: [], // 轮播
  	movie: [], // 主页电影列表
  	cityLayerVisible: false // 城市选择是否弹出
  }

  showCitylayer = () => {
		this.setState({
			cityLayerVisible: true
		})
	}

  hideCitylayer = () => {
  	this.setState({
  			cityLayerVisible: false
  		})
  }

  onchangeCity = (city) => {
  	this.setState({
			city
		})
  	this.hideCitylayer()
  }

  componentWillMount() { // 获取主页数据
  	this.getData();
  }

  getData = async () => { // 获取主页数据
  	const data = await request('/index');
  	console.log(data);
  	const {city, poster, movie} = data;
  	this.setState({
  		city,
  		poster,
  		movie
  	})

  }

  render() {
  	const {city, poster, movie, cityLayerVisible} = this.state;
    return (
      <div className="home">
      		{/*主页顶部*/}
        	<TopBar city= {city} showCitylayer={this.showCitylayer}/>

			{/*主页顶部*/}
        	<div className="home-slide">
        		<div className="home-slideWrap">
        			<PosterSlide data={poster} />
        		</div>
        	</div>

            {/*电影列表*/}
        	<ul className="home-content">
        	{
        		movie.map((items, index) => { 
        			return (
        				<li key="items.poster"><MovieItem data={items} /></li>
        				)
        		})
        	}
        		
        	</ul>

			{/*主页底部tab*/}
        	<TabMenu current={'movie'}/>

            {/*全部城市*/}
        	{ cityLayerVisible && <RenderToBody><CityLayer onClose={this.hideCitylayer} selectCity={this.onchangeCity}/></RenderToBody> }
        	
      </div>
    );
  }
}

export default Home;
