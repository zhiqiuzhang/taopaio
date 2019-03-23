import React, { Component } from 'react';
import './index.scss';
import '../../commen.scss';
import TopBar from './components/TopBar'
import PosterSlide from './components/Slide'
import MovieItem from './components/MovieItem'
import CityLayer from './components/CityLayer'
import TabMenu from '../../components/TabMenu'
import RenderToBody from '../../components/RenderToBody'

class Home extends Component {
  showCitylayer() {
  		alert('城市');
	}
  render() {
    return (
      <div className="home">

        	<TopBar city="开封" showCitylayer={this.showCitylayer}/>

        	<div className="home-slide">
        		<div className="home-slideWrap">
        			<PosterSlide data={[]} />
        		</div>
        	</div>

        	<div className="home-content">
        		<MovieItem />
        		<MovieItem />
        		<MovieItem />
        		<MovieItem />
        		<MovieItem />
        		<MovieItem />
        		<MovieItem />
        	</div>

        	<TabMenu current={'movie'}/>

        	<RenderToBody><CityLayer /></RenderToBody>
        	
      </div>
    );
  }
}

export default Home;
