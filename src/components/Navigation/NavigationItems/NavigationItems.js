import React, { Component } from 'react'

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import SignUp from '../../../containers/Auth/Signup/Signup';
import SignIn from '../../../containers/Auth/Signin/Signin';
import Avatar from '../../Avatar/Avatar';

import Aux from '../../../hoc/_Aux';

class NavigationItems extends Component {

  state = {
    showModal: false,
    operation: ''
  }

  showModalHandler = (type) => {
    this.setState({ showModal: true, operation: type });
  }

  render() {
    let modal = [];
    if (this.state.showModal) {
      if (this.state.operation === 'New Account') {
        modal.push(<SignUp key={Math.random(1000)} show={this.state.showModal} />)
      }
      else if (this.state.operation === 'Login') {
        modal.push(<SignIn key={Math.random(1000)} show={this.state.showModal} />)
      }
    }

    return (
      <Aux>
        {modal}
        <ul className={classes.NavigationItems} >
          <NavigationItem  active>Flowers</NavigationItem>
          <NavigationItem  active>Favorites</NavigationItem>
          <NavigationItem  active>Latest Sightings</NavigationItem>
          {this.props.isAuthenticated ? <Avatar /> :
            [<NavigationItem link="/#" active clicked={this.showModalHandler.bind(this)}>Login</NavigationItem>,
            <NavigationItem link="/#" active clicked={this.showModalHandler.bind(this)}>New Account</NavigationItem>]}
        </ul>
      </Aux >
    )
  }
}

export default NavigationItems
