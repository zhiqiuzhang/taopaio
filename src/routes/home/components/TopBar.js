import React from 'react';
import PropTypes from 'prop-types';
import './Topbar.scss';

const TopBar = ({ city, showCitylayer }) => {
	return (
		<div className="topBar">
			<div className="topBar-city" onClick={showCitylayer}>{city}</div>
			<div className="topBar-search"></div>
			<div className="topBar-scan"></div>
		</div>
	)
}

TopBar.PropsTypes = {
	city: PropTypes.string.isRequired,
	showCitylayer: PropTypes.func.isRequired
}
export default TopBar;