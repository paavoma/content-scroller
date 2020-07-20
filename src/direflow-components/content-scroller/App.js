import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'direflow-component';
import styles from './App.css';
import Slider from './Slider/Slider'

const App = (props) => {


  

  

  return (
    <>
      
        <Slider elements={props.texts}/>
      
    </>
  );
};



App.propTypes = {
  componentTitle: PropTypes.string,
  sampleList: PropTypes.array,
};

export default withStyles(styles)(App);
