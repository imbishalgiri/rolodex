import React from 'react';
import './card.style.css';

const Card = props => {
 	return(
		<div className="card__container">
			<img src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`} alt=""/>
			<h1>{props.monsters.name}</h1>;
		</div>
 	); 
}; 


export default Card;