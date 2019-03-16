import React, { Component } from 'react';
import './index.scss';
import TopBar from './components/TopBar'

class Home extends Component {
  showCitylayer() {
  		alert('城市');
	}
  render() {
    return (
      <div className="home">
        	<TopBar city="开封" showCitylayer={this.showCitylayer}/>
      </div>
    );
  }
}

export default Home;
