import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import Search from './components/Search/Search';
import CardItems from './containers/Card/CardItems';
import * as actionTypes from './store/auth';
import {connect} from 'react-redux';

class App extends Component {

  componentDidMount(){
    console.log('here');
    this.props.onTryAutoSignUp();
  }
  render() {
    return (
      <div>
        <Layout>
          <Search />
          <CardItems />
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actionTypes.authCheckState())
  };
};
export default connect(null, mapDispatchToProps)(App);
