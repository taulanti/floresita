import React, { Component } from 'react'
import Modal from '../../../UI/Modal/Modal';
import classes from './Signup.module.css';
import * as actions from '../../../store/auth';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import Signin from '../Signin/Signin';
import Profile from '../../Profile/Profile';

class Signup extends Component {

  state = {
    fname: '',
    lname: '',
    email: '',
    password: '',
    loading: false,
    isModalOpen: true,
    modalClass: '',
    openLogin: false,
    hasUserSignedUp: false,
    isProfileOpen: false,
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
    this.setState({ openLogin: true, isModalOpen: false});
    this.props.isSignedUp();
  }

  onCloseModal = () => {
    this.setState({ isModalOpen: false });
  }

  profileHandler = () => {
    this.setState({ isProfileOpen: true });
  }

  render() {
    let form;
    if (this.props.loading) {
      form = <Spinner animation="border" variant="danger" />
    } else {
      if (!this.props.isAuthenticated && !this.props.hasUserSignedUp && this.state.isModalOpen) {
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
          <button className={classes.button} onClick={this.onCloseModal}> Cancel</button></div>;
      }
      else if (this.state.openLogin) {
        form = <Signin openLogin={this.state.openLogin} />
      }
      else if (this.props.hasUserSignedUp) {
        form = [<p>You have succesfully signed up!</p>, <button className={classes.button} onClick={this.onOkHandler}>OK</button>];
      }
    }



    let errorMessage = null;
    if (this.props.error) {
      errorMessage = (
        <p><strong>{this.props.error.message}</strong></p>
      )
    }
    console.log('ENTERED HEREE');
    return (
      this.state.openLogin ? form : <Modal show={this.state.isModalOpen}>
        {errorMessage}
        {form}
      </Modal>
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
    onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
    isSignedUp: () => dispatch(actions.authCheckState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup)

