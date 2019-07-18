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

  componentDidMount = () => {
    this.props.getFlowers();
  }

  render() {
    const flowers = this.props.flowerList.map((flower, index) => {
      return <CardItem key={flower.id} favorite={flower.favorite} id={flower.id} name={flower.name} image={flower.profile_picture} latinName={flower.latin_name} sightings={flower.sightings} isAuth={this.props.isAuthenticated} />
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
    flowerFavorite: (id) => dispatch(actions.favorite(id)),
    getFlowers: () => dispatch(actions.getFlowers())
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CardItems);