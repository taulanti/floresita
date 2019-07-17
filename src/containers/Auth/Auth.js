import React, { Component } from 'react'
import Modal from '../../UI/Modal/Modal';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import Signup from './Signup/Signup';
import Signin from './Signin/Signin'

class Auth extends Component {

  state = {
    email: '',
    password: '',
    loading: false,
    isModalOpen: true,
    isProfileOpen: false,
    isOpenLogin: false
  }

  render() {
    let form;
    if (this.props.loading) {
      form = <Spinner animation="border" variant="danger" />
    }
    else {
      if (this.props.type === 'Signin') {
        form = <Signin />
      } else if (this.props.type === 'New Account') {
        form = <Signup />
      }

      return (
        form
      )
    }
  }
}


export default Auth

