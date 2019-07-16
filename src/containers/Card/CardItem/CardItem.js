import React from 'react';
import Card from 'react-bootstrap/Card'
import classes from './CardItem.module.css';
//import img from '../../../assets/images/cover.png';
//import logo from '../../assets/Logo/FlowrSpot';

const CardItem = (props) => {
  return (
    <div className={classes.Content}>
      <Card key={props.image.id} style={{ width: '19rem', height: "100%", color: "white", }}>
        <Card.Img variant="top" src={props.image} style={{ filter: "brightness(65%)", height: "100%" }} />
        <Card.ImgOverlay>
          {props.isAuth ? <button style={{ float: "right" }}>Star</button> : null}
          <Card.Subtitle style={{ textAlign: "center", marginTop: "130px" }}>
            <p>{props.name}</p>
          </Card.Subtitle>
        </Card.ImgOverlay>

      </Card>
    </div>
  )
}

export default CardItem;