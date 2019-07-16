import React, { Component } from 'react';

import Aux from '../../hoc/_Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import { connect } from 'react-redux';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Toolbar isAuth={this.props.isAuthenticated} />
        <main className={classes.Content}>
          {this.props.children}{/* show everything inside where layout component is used, in this case at App.js */}
        </main>
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