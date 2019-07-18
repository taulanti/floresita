import React, { Component } from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import SignUp from '../../../containers/Auth/Signup/Signup';
import SignIn from '../../../containers/Auth/Signin/Signin';
import Avatar from '../../Avatar/Avatar';
import Profile from '../../../containers/Profile/Profile';
import { connect } from 'react-redux';
import Aux from '../../../hoc/_Aux';
import * as actionTypes from '../../../store/auth';
import Auth from '../../../containers/Auth/Auth';
import { Route } from 'react-router-dom';
import Favorites from '../../Favorites/Favorites';

class NavigationItems extends Component {

  state = {
    showModal: false,
    operation: ''
  }

  showModalHandler = (type) => {
    console.log('method called');
    this.setState({ showModal: true, operation: type });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.showModal && prevState.showModal) {
        this.setState({ showModal: false })
    }
  }

  render() {
    let modal = [];
    if (this.state.showModal) {
      if (this.state.operation === 'New Account') {
        //modal.push(<SignUp key={Math.random(1000)} show={this.state.showModal} />)
        modal.push(<Auth type={this.state.operation} />);
      }
      else if (this.state.operation === 'Login') {
        modal.push(<SignIn key={Math.random(1000)} show={this.state.showModal} />)
      }
      else {
        console.log('inside navvv: ' + this.state.showModal);
        modal.push(<Profile key={Math.random(1000)} />)
      }
    }
    return (
      <Aux>
        {modal}
        <ul className={classes.NavigationItems} >
          <NavigationItem link="/home" clicked={null}>Flowers</NavigationItem>
          <NavigationItem link="/favorites" clicked={null}>Favorites</NavigationItem>
          <NavigationItem >Latest Sightings</NavigationItem>
          {this.props.isAuthenticated ?
            [<NavigationItem >{localStorage.getItem('email')}</NavigationItem>,
            <Avatar link="/profile" clicked={this.showModalHandler.bind(this)}>Profile</Avatar>] :
            [<NavigationItem link="/login" clicked={this.showModalHandler.bind(this)}>Login</NavigationItem>,
            <NavigationItem link="/signup" clicked={this.showModalHandler.bind(this)}>New Account</NavigationItem>]}
        </ul>
      </Aux >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    email: state.auth.email
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actionTypes.authCheckState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationItems)
