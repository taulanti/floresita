import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import classes from './CardItem.module.css';
//import img from '../../../assets/images/cover.png';
//import logo from '../../assets/Logo/FlowrSpot';

class CardItem extends Component {

  render() {
    return (
      <div className={classes.Content}>
        <Card key={this.props.image.id} style={{ width: '19rem', height: "100%", color: "white",  }}>
          <Card.Img variant="top" src={this.props.image} style={{ filter: "brightness(65%)", height: "100%" }} />
          <Card.ImgOverlay>
            <button style={{ float: "right" }}>Star</button>
            <Card.Subtitle style={{ textAlign: "center", marginTop: "130px" }}>
              <p>{this.props.name}</p>
            </Card.Subtitle>
          </Card.ImgOverlay>

        </Card>
      </div>

    )
  }
}


export default CardItem;