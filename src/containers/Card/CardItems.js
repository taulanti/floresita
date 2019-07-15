import React, { Component } from 'react';
import CardItem from './CardItem/CardItem';
import { CardDeck } from 'react-bootstrap';
import classes from './CardItems.module.css';
import { connect } from 'react-redux';

class CardItems extends Component {
  importAll = (r) => {
    return r.keys().map(r);
  }


  render() {
    const flowers = this.props.flowerList.map((flower, index) => {
      return <CardItem key={flower.id} name={flower.name} image={flower.image} />
    });

    return (
      <CardDeck className={classes.Content}>
        {flowers}
      </CardDeck>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    flowerList: state.filtered? state.filtered : state.flowerList,
  };
};



export default connect(mapStateToProps)(CardItems);