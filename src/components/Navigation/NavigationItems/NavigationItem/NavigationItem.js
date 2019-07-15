import React from 'react'

import classes from './NavigationItem.module.css';

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
    <li className={classes.NavigationItem} onClick={() => props.clicked(props.children)}>< a href={props.link} className={styling.join(' ')}>{props.children}</a></li>
  )
}

export default NavigationItem