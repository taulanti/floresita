import React, { Component } from 'react'

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import SignUp from '../../../containers/Auth/Signup/Signup';

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
      modal.push(<div className={classes.overlay}/>);
      if (this.state.operation === 'New Account') {
        modal.push(<SignUp show={this.state.showModal} />)
      }
    }

    return (
      <div>
        {modal}
        <ul className={classes.NavigationItems} >
          <NavigationItem link="/flowers" active>Flowers</NavigationItem>
          <NavigationItem link="/favorites" active>Favorites</NavigationItem>
          <NavigationItem link="/login" active>Log in</NavigationItem>
          <NavigationItem link="#" clicked={this.showModalHandler.bind(this)}>New Account</NavigationItem>
        </ul>
      </div >
    )
  }
}

export default NavigationItems
