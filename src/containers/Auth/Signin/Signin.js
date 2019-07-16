import React, { Component } from 'react'
import Modal from '../../../UI/Modal/Modal';
import classes from './Signin.module.css';
import * as actions from '../../../store/auth';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';

class Signin extends Component {

  state = {
    email: '',
    password: '',
    loading: false,
    isModalOpen: true
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
    this.setState({ isModalOpen: true });
    this.props.onAuth(this.state.email, this.state.password, false);
  }

  onOkHandler = () => {
    this.setState({ isModalOpen: false });
  }

  onModalClose = () => {
    this.setState({ isModalOpen: false });
  }

  render() {
    let form;
    if (this.props.loading) {
      form = <Spinner animation="border" variant="danger" />
    } else {
      if (!this.props.isAuthenticated) {
        form = <div>
          <h4 className={classes.Text_Style_2}>Welcome back</h4>
          <div className={classes.input_1}>
            <input type="text" name="email" placeholder=" Email" onChange={(e) => this.inputChangeHandler(e, 'email')}></input>
            <input type="password" name="password" placeholder=" Password" onChange={(e) => this.inputChangeHandler(e, 'password')}></input>
          </div>
          <button className={classes.button} onClick={this.submitHandler}> Login to your Account</button>
          <button className={classes.button} onClick={this.onModalClose}> Cancel </button>
        </div >;
      } else {
        form = [<p>Congratulations! You have successfully logged into FlowrSpot!</p>,
        <div className={classes.buttons}><button onClick={this.onOkHandler.bind(this)}>OK</button>
          <button>Profile</button></div>]
      }

    }

    let errorMessage = null;
    if (this.props.error) {
      errorMessage = (
        <p>You have got an error
        <p>Error message: <strong>{this.props.error.message}</strong></p>
        </p>
      )
    }
    return (

      this.state.isModalOpen ?
        <Modal show={this.props.show}>
          {errorMessage}
          {form}
        </Modal > : null
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin)

