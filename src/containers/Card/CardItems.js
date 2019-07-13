import React, { Component } from 'react';
import CardItem from './CardItem/CardItem';
import { CardDeck } from 'react-bootstrap';
import classes from './CardItems.module.css';

class CardItems extends Component {
  render() {
    return (
      <CardDeck className={classes.Content}>
        <CardItem size={10} />
        <CardItem size={10} />
        <CardItem size={10} />
        <CardItem size={10} />
        <CardItem size={10} />
        <CardItem size={10} />
        <CardItem size={10} />
        <CardItem size={10} />
        <CardItem size={10} />
      </CardDeck>
    )
  }
}


export default CardItems;