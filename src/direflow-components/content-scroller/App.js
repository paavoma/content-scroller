import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'direflow-component';
import styles from './App.css';
import Slider from './Slider/Slider';

const App = (props) => {
  
  return (
    <>
      
        <Slider elements={populateElements(props)} visibleDivs={props.visibleDivs}/>
      
    </>
  );
};

function populateElements(props) {
  const elementsToIterate = [props.image1, 
    props.image2, 
    props.image3, 
    props.image4, 
    props.image5,
    props.image6,
    props.image7, 
    props.image8, 
    props.image9, 
    props.image10,
    props.image11,
    props.image12];
  const finalElements = [];
  elementsToIterate.forEach((e) => {
    
    if (e !== "empty"){
      finalElements.push(e);
    }
  });
  return finalElements;
}

App.defaultProps = {
  image1: "empty",
  image2: "empty",
  image3: "empty",
  image4: "empty",
  image5: "empty",
  image6: "empty",
  image7: "empty",
  image8: "empty",
  image9: "empty",
  image10: "empty",
  image11: "empty",
  image12: "empty",
  visibleDivs: "1",
}


App.propTypes = {
  image1: PropTypes.string,
  image2: PropTypes.string,
  componentTitle: PropTypes.string,
  sampleList: PropTypes.array,
};

export default withStyles(styles)(App);
