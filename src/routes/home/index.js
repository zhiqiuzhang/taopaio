import React, { Component } from 'react';
import './index.scss';
import TopBar from './components/TopBar'
import PosterSlide from './components/Slide'

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
      </div>
    );
  }
}

export default Home;
