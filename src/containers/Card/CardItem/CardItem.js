import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import classes from './CardItem.module.css';
//import img from '../../../assets/images/cover.png';
//import logo from '../../assets/Logo/FlowrSpot';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

class CardItem extends Component {

  state = {
    btnClass: this.props.favorite ? classes.buttonClicked : classes.button1
  }

  onFlowerFavorite = (id) => {
    const cl = this.state.btnClass === classes.buttonClicked ? classes.button1 : classes.buttonClicked
    this.setState({btnClass: cl})
    this.props.flowerFavorite(id);
  }

  render() {
    return (
      <div className={classes.Content}>
        <Card key={this.props.id} style={{ width: '19rem', height: "100%", color: "white", }}>
          <Card.Img variant="top" src={this.props.image} style={{ filter: "brightness(65%)", height: "100%" }} />
          <Card.ImgOverlay>
            {this.props.isAuth ? <button className={this.state.btnClass} onClick={() => this.onFlowerFavorite(this.props.id)}></button> : null}
            <Card.Subtitle style={{ textAlign: "center", marginTop: "130px" }}>
              <p>{this.props.name}</p>
              <p>{this.props.latinName}</p>
              <p><strong>Sightings: {this.props.sightings}</strong></p>
            </Card.Subtitle>
          </Card.ImgOverlay>
        </Card>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    flowerFavorite: (id) => dispatch(actions.favorite(id))
  };
}


export default connect(null, mapDispatchToProps)(CardItem);
