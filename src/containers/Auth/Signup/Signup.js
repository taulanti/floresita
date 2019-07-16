import React, { Component } from 'react'
import Modal from '../../../UI/Modal/Modal';
import classes from './Signup.module.css';
import * as actions from '../../../store/auth';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import Signin from '../Signin/Signin';

class Signup extends Component {

  state = {
    fname: '',
    lname: '',
    email: '',
    password: '',
    loading: false,
    isModalOpen: true,
    openLogin: false,
  }

  inputChangeHandler = (event, control) => {
    if (control === 'fname') {
      this.setState({ fname: event.target.value });
    }
    else if (control === 'lname') {
      this.setState({ lname: event.target.value });
    }
    if (control === 'email') {
      this.setState({ email: event.target.value });
    }
    else {
      this.setState({ password: event.target.value });
    }

  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(this.state.email, this.state.password, true);
  }

  onOkHandler = () => {
    this.setState({ openLogin: true });
  }

  onCloseModal = () => {
    this.setState({ isModalOpen: false });
  }

  render() {
    let form;
    if (this.props.loading) {
      form = <Spinner animation="border" variant="danger" />
    } else {
      if (!this.props.isAuthenticated && !this.props.hasUserSignedUp) {
        form = <div><h4 className={classes.Text_Style_2}>Create an account</h4>
          <div className={classes.input_1}>
            <input type="text" name="fname" placeholder=" First name" onChange={(e) => this.inputChangeHandler(e, 'fname')}></input>
            <input type="text" name="lname" placeholder=" Last name" onChange={(e) => this.inputChangeHandler(e, 'lname')}></input>
          </div>
          <div className={classes.input_2}>
            <input type="email" name="email" placeholder=" Email" onChange={(e) => this.inputChangeHandler(e, 'email')}></input>
            <input type="password" name="password" placeholder=" Password" onChange={(e) => this.inputChangeHandler(e, 'password')}></input>
          </div>
          <button className={classes.button} onClick={this.submitHandler}> Create Account</button>
          <button className={classes.button} onClick={this.onCloseModal}> Cancel</button>;</div>;
      } else {
        form = <div><p>Congratulations! You have successfully signed up for FlowrSpot!</p>
          <button className={classes.button} onClick={this.onOkHandler.bind(this)}>OK</button></div>;
      }
    }

    let errorMessage = null;
    if (this.props.error) {
      errorMessage = (
        <p><strong>{this.props.error.message}</strong></p>
      )
    }
    if (this.state.openLogin) {
      form = <Signin show={this.state.openLogin} />;
    }

    return (
      this.state.openLogin ? form :
        (this.state.isModalOpen ?
          <Modal show={this.props.show}>
            {errorMessage}
            {form}
          </Modal > : null)
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    hasUserSignedUp: state.auth.hasUserSignedUp
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup)

