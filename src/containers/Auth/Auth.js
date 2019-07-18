import React, { Component } from 'react'

import { Spinner } from 'react-bootstrap';
import Signup from './Signup/Signup';
import Signin from './Signin/Signin'

class Auth extends Component {

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

