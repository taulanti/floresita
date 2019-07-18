import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import Search from './components/Search/Search';
import Signin from './containers/Auth/Signin/Signin';
import Signup from './containers/Auth/Signup/Signup';
import CardItems from './containers/Card/CardItems';
import * as actionTypes from './store/auth';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';
import Profile from './containers/Profile/Profile';

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignUp();
  }
  render() {
    return (
      <div>
        <Layout>
          
          <Route path="/login"  component={Signin} />
          <Route path="/signup" component={Signup} />      
          <Route path="/profile" component={Profile} />
          <Route path="/" component={Search} />
          <Switch>
            <Route path="/favorites" component={Favorites} />
            <Route path="/" component={CardItems} />
          </Switch>

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
