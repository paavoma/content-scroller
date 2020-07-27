import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'direflow-component';
import styles from './App.css';
import Slider from './Slider/Slider';
import image1 from '../../assets/cat.jpg';
import image2 from '../../assets/dog.jpg';

const App = (props) => {
  
  return (
    <>
      
        <Slider elements={[props.image1, props.image2]}/>
      
    </>
  );
};

App.defaultProps = {
  image1: image1,
  image2: image2,
}


App.propTypes = {
  image1: PropTypes.string,
  image2: PropTypes.string,
  componentTitle: PropTypes.string,
  sampleList: PropTypes.array,
};

export default withStyles(styles)(App);
