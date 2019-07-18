import React, { Component } from 'react'
import Modal from '../../UI/Modal/Modal';
import Avatar from '../../components/Avatar/Avatar';
import * as actions from '../../store/auth';
import { connect } from 'react-redux';
import classes from './Profile.module.css';
import { Redirect } from 'react-router-dom'


class Profile extends Component {

  state = {
    modalShow: true,
    logout: false
  }

  logOut = () => {
    console.log('logout before: ' + this.state.logout);
    this.setState({ modalShow: false, logout: true }, () => this.props.onLogout());
  }

  closeModal = () => {
    this.setState({modalShow: false});
  }

  render() {
    return (
      this.state.logout || !this.state.modalShow? <Redirect to="/home" /> : (<Modal show={(this.state.modalShow) && this.props.isAuthenticated} className={classes.button}>
        <Avatar />
        <h1>{localStorage.getItem('email')}</h1>
        <button className={classes.button} onClick={() => this.logOut()}>Log out</button>
        <button className={classes.button} onClick={this.closeModal.bind(this)}>Close</button>
      </Modal>)

    )
  }
}

const mapStateToProps = (state) => {
  console.log('fucking email: ' + state.auth.email);
  return {
    email: state.auth.email,
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

