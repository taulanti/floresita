import React, { Component } from 'react';
import CardItem from './CardItem/CardItem';
import { CardDeck } from 'react-bootstrap';
import classes from './CardItems.module.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class CardItems extends Component {
  importAll = (r) => {
    return r.keys().map(r);
  }



  render() {
    const flowers = this.props.flowerList.map((flower, index) => {
      return <CardItem key={flower.id} id={flower.id} name={flower.name} image={flower.image}  isAuth={this.props.isAuthenticated} />
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
    flowerList: state.search.filtered ? state.search.filtered : state.search.flowerList,
    isAuthenticated: state.auth.token !== null
  };
};
const mapDispatchToProps = dispatch => {
  return {
    flowerFavorite: (id) => dispatch(actions.favorite(id))
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CardItems);