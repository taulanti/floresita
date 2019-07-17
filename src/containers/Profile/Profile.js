import React, { Component } from 'react'
import Modal from '../../UI/Modal/Modal';
import Avatar from '../../components/Avatar/Avatar';
import * as actions from '../../store/auth';
import { connect } from 'react-redux';
import classes from './Profile.module.css';

class Profile extends Component {

  state = {
    modalShow: true
  }

  logOut = () => {
    this.setState({ modalShow: false });
    this.props.onLogout();
  }

  closeModal = () => {
    this.setState({ modalShow: false });
  }

  render() {
    return (
      <Modal show={this.state.modalShow && this.props.isAuthenticated} className={classes.button}>
        <Avatar />
        <h1>{this.props.email}</h1>
        <button className={classes.button} onClick={this.logOut.bind(this)}>Log out</button>
        <button className={classes.button} onClick={this.closeModal.bind(this)}>Close</button>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
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

