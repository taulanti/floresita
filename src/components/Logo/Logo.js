import React from 'react'

import flowrSpotLogo from '../../assets/Logo/FlowrSpot.png';
import classes from './Logo.module.css';

const Logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={flowrSpotLogo} alt="FlowrSpot" />
    </div>
  )
}

export default Logo
