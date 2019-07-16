import React from 'react'
import avatar from '../../assets/avatar/kawai.png';
import classes from './Avatar.module.css';

const Avatar = () => {
  return (
    <img src={avatar} alt="FlowrSpot" className={classes.avatar} />
  )
}

export default Avatar
