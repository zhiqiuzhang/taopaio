import React from 'react';
import PropTypes from 'prop-types';
import './TabMenu.scss';

const TabMenu = () => {
	return (
		<div className="tabMenu">
			<div className="tabMenu-btn">
				<i className="tabMenu-icon"></i>
				<span className="tabMenu-text">主页</span>
			</div>
			<div className="tabMenu-btn">
				<i className="tabMenu-icon"></i>
				<span className="tabMenu-text">用户</span>
			</div>
		</div>
	)
}

TabMenu.PropsTypes = {
	
}
export default TabMenu;