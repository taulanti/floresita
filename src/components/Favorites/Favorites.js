import React, { Component } from 'react';
import CardItem from './CardItem/CardItem';
import { CardDeck } from 'react-bootstrap';
import classes from './CardItems.module.css';
import { connect } from 'react-redux';
import Search from '../Search/Search';

class Favorites extends Component {
  importAll = (r) => {
    return r.keys().map(r);
  }


  render() {
    const flowers = this.props.flowerList.map((flower, index) => {
      return <CardItem key={flower.id} name={flower.name} image={flower.image} />
    });

    return (
      <div>
        <CardDeck className={classes.Content}>
          {flowers}
        </CardDeck>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    flowerList: state.filtered ? state.filtered : state.flowerList,
  };
};



export default connect(mapStateToProps)(Favorites);