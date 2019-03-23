import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './TabMenu.scss';

const TabMenu = ({ current }) => {
	return (
		<div className="tabMenu">
			<Link to="/" className={`tabMenu-btn  ${current === 'movie' && 'tabMenu-btn-active'}`}>
				<i className="tabMenu-icon tabMenu-icon-movie"></i>
				<span className="tabMenu-text">主页</span>
			</Link>
			<Link to="/cinema" className={`tabMenu-btn  ${current === 'cinema' && 'tabMenu-btn-active'}`}>
				<i className="tabMenu-icon tabMenu-icon-cinema"></i>
				<span className="tabMenu-text">影院</span>
			</Link>
			<Link to="/user" className={`tabMenu-btn  ${current === 'user' && 'tabMenu-btn-active'}`}>
				<i className="tabMenu-icon tabMenu-icon-user"></i>
				<span className="tabMenu-text">用户</span>
			</Link>
		</div>
	)
}

TabMenu.PropsTypes = {
	current: PropTypes.string.isRequire	
}
export default TabMenu;