import React from 'react'

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerToggleButton from '../../SideDrawer/SideDrawerToggleButton';

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div>
        <SideDrawerToggleButton click={props.drawerClickHandler} />
      </div>

      <div>
        <Logo />
      </div>
      <nav>
        <NavigationItems isAuthenticated={props.isAuth} />
      </nav>
    </header>
  )
}

export default Toolbar
