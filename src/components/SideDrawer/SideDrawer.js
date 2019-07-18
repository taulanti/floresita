import React from 'react'
import classes from './SideDrawer.module.css';
import { NavLink } from 'react-router-dom';


const SideDrawer = (props) => {
  return (
    <div className={classes.side_drawer}>
      <nav>
        <ul>
          <li><NavLink to="/home">Flowers</NavLink></li>
          <li><NavLink to="/favorites">Favorites</NavLink></li>
          {props.isAuth ? <li>{props.isAuth ? <NavLink to="/profile">Profile</NavLink> : null}</li> :
            [<li><NavLink to="/login">Login</NavLink></li>,
            <li><NavLink to="/signup">Signup</NavLink></li>]}
        </ul>
      </nav>
    </div>
  )
}

export default SideDrawer

