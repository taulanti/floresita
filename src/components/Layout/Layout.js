import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Toolbar/>
        <main className={classes.Content}>
          {this.props.children}{/* show everything inside where layout component is used, in this case at App.js */}
        </main>
      </Aux>
    )
  }
}


export default Layout;