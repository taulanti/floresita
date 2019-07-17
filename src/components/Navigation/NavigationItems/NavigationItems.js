import React, { Component } from 'react'

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
        //modal.push(<SignUp key={Math.random(1000)} show={this.state.showModal} />)
        modal.push(<Auth type={this.state.operation} />);
      }
      else if (this.state.operation === 'Login') {
        modal.push(<SignIn key={Math.random(1000)} show={this.state.showModal} />)
      }
      else {
        modal.push(<Profile key={Math.random(1000)} show={this.state.showModal} />)
      }
    }

    return (
      <Aux>
        {modal}
        <ul className={classes.NavigationItems} >
          <NavigationItem active>Flowers</NavigationItem>
          <NavigationItem active>Favorites</NavigationItem>
          <NavigationItem active>Latest Sightings</NavigationItem>
          {this.props.isAuthenticated ? <Avatar clicked={this.showModalHandler.bind(this)} /> :
            [<NavigationItem link="/#" active clicked={this.showModalHandler.bind(this)}>Login</NavigationItem>,
            <NavigationItem link="/#" active clicked={this.showModalHandler.bind(this)}>New Account</NavigationItem>]}
        </ul>
      </Aux >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actionTypes.authCheckState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationItems)
