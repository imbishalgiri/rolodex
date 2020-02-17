import React from 'react';
import './card-list.styles.css'

import Card from '../card/card.component';

export const CardList = props => {
	return (
		<div className="card__list">
		 {props.monsters.map( monster => {
             return <Card  key={monster.id} monsters={monster} />;
            })}
		</div>
	);
}


