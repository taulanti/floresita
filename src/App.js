import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import Search from './components/Search/Search';
import CardItems from './containers/Card/CardItems';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Search />
          <CardItems />
        </Layout>
      </div >
    );
  }
}

export default App;
