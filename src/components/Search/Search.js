import React, { Component } from 'react'
import classes from './Search.module.css';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from '../../store/actions';

class Search extends Component {

  render() {
    const { search, inputText } = this.props;
    return (
      <div>
        <div className={classes.Search} >
          <div className={classes.Cover}></div>
          <div className={classes.Input}>
            <h1 className={classes.Text}>Discover flowers around you</h1>
            <h5 className={classes.Text2}><i>Search for over 8000 flowers</i></h5>
            <Form.Control type="text" size="lg" placeholder="Search a flower" onChange={(e) => search(e.target.value)} value={inputText} />
          </div>
        </div >
      </div >
    )
  }
}

function mapStateToProps({inputText}) {
  return { inputText };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ search }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
