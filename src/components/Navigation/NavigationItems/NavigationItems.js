import React from 'react'

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/flowers" active>Flowers</NavigationItem>
      <NavigationItem link="/favorites" active>Favorites</NavigationItem>
      <NavigationItem link="/favorites" active>Log in</NavigationItem>
      <NavigationItem link="/favorites" active>New Account</NavigationItem>
    </ul>
  )
}

export default NavigationItems
