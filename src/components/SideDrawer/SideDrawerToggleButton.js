import React from 'react'
import classes from './SideDrawer.module.css';

const SideDrawerToggleButton = (props) => {
  return (
    <button className={classes.toggle_button} onClick={props.click}>
      <div className={classes.toggle_button_line} />
      <div className={classes.toggle_button_line} />
      <div className={classes.toggle_button_line} />
    </button >

  )
}

export default SideDrawerToggleButton
