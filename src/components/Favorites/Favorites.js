import React, { Component } from 'react';
import CardItem from '../../containers/Card/CardItem/CardItem';
import { CardDeck } from 'react-bootstrap';
import classes from '../../containers/Card/CardItems.module.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class Favorites extends Component {

  render() {
    console.log(this.props.favorites);
    const flowers = this.props.flowerList.filter((fl) => { return fl.favorite }).map((flower, index) => {
      return <CardItem key={flower.id} id={flower.id} name={flower.name} latinName={flower.latin_name} sightings={flower.sightings} image={flower.profile_picture} />
    });

    return (
      <div>
        {flowers.length < 1 && this.props.isAuthenticated ? <h4 style={{ textAlign: "center" }}>You don't have favorite flowers. Go search for Flowers on flower tab and favorite them</h4> : (
          !this.props.isAuthenticated ? <Redirect to="/login" /> :
            <CardDeck className={classes.Content}>
              {flowers}
            </CardDeck>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    flowerList: state.search.filtered ? state.search.filtered : state.search.flowerList,
    favorites: state.search.favorites,
    isAuthenticated: state.auth.token !== null
  };
};



export default connect(mapStateToProps)(Favorites);