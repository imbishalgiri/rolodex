import React from 'react';
import './loader.style.css';

const Loader = props => {
	
	return(
		<div className="animation">
		<div className="animation__text"><h1>{props.animationName}</h1></div>
		<div className="animation__elem"></div>
		</div>
	)
}

export default Loader;