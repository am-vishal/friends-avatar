import React from 'react';
import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <img alt={`${props.friend.name}`} src={`https://robohash.org/${props.friend.id}?set=set5&size=180x180`} />
    <h2> {props.friend.name} </h2>
    <p> {props.friend.email} </p>
    <p> {props.friend.phone} </p>
    <p> <a href={`${props.friend.website}`} target='_blank' rel="noopener noreferrer">{props.friend.website}</a> </p>
  </div >
);