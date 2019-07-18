import React from 'react'

import classes from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => {
  let styling = [];
  if (props.children === 'New Account') {
    styling.push(classes.Highlight)
  }
  else if (props.children === 'Log in') {
    styling.push(classes.Text_Style_Login)
  }
  else {
    styling.push(classes.Text_Style_2)
  }
  return (
    <li className={classes.NavigationItem}><NavLink to={props.link} activeClassName={classes.active} className={styling.join(' ')}>{props.children}</NavLink></li>
  )
}

export default NavigationItem