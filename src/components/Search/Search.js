import React from 'react'
import classes from './Search.module.css';
import { Form } from 'react-bootstrap';

const Search = () => {
  return (
    <div className={classes.Search}>
      <div className={classes.Cover}></div>
      <div className={classes.Input}>
        <h1 className={classes.Text}>Discover flowers around you</h1>
        <h5 className={classes.Text2}><i>Search for over 8000 flowers</i></h5>
        <Form.Control type="text" size="lg" placeholder="Search a flower" />
      </div>
    </div >
  )
}

export default Search
