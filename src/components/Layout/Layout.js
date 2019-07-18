import React, { Component } from 'react';

import Aux from '../../hoc/_Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import { connect } from 'react-redux';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';

class Layout extends Component {

  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backDropToggleClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let sideDrawer = null;
    let backDrop = null;
    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer isAuth={this.props.isAuthenticated} />
      backDrop = <Backdrop isAuth={this.props.isAuthenticated} click={this.backDropToggleClickHandler}/>
    }
    return (
      <Aux>
        <div style={{ height: "100%" }}>
          <Toolbar isAuth={this.props.isAuthenticated} drawerClickHandler={this.drawerToggleClickHandler} />
          {sideDrawer}
          {backDrop}
          <main className={classes.Content}>
            {this.props.children}{/* show everything inside where layout component is used, in this case at App.js */}
          </main>
        </div>

      </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};
export default connect(mapStateToProps)(Layout);