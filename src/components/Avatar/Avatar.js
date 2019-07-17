import React from 'react'
import avatar from '../../assets/avatar/kawai.png';
import classes from './Avatar.module.css';

const Avatar = (props) => {
  return (
    <div onClick={() => props.clicked()}>
      <img src={avatar} alt="FlowrSpot" className={classes.avatar} />
    </div>

  )
}

export default Avatar
