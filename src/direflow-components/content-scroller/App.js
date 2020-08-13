import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'direflow-component';
import styles from './App.css';
import Slider from './Slider/Slider';

const App = (props) => {
  
  return (
    <>
        <div className="MainSlider">
        <Slider elements={populateElements(props)} visibleDivs={props.visibleDivs}/>
        </div>
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
  let finalElements = [];

  const elementLinksToIterate = [props.imageLink1, 
    props.imageLink2, 
    props.imageLink3, 
    props.imageLink4, 
    props.imageLink5,
    props.imageLink6,
    props.imageLink7, 
    props.imageLink8, 
    props.imageLink9, 
    props.imageLink10,
    props.imageLink11,
    props.imageLink12];
  let finalElementLinks = [];
  let index = 0;
  elementsToIterate.forEach((e) => {
    
    if (e !== "empty"){
      finalElements.push(e);
      finalElementLinks.push(elementLinksToIterate[index]);
    }
    index++;
  });

  const finalProps = [
    finalElements,
    finalElementLinks
  ]

  return finalProps;
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
  imageLink1: "#!",
  imageLink2: "#!",
  imageLink3: "#!",
  imageLink4: "#!",
  imageLink5: "#!",
  imageLink6: "#!",
  imageLink7: "#!",
  imageLink8: "#!",
  imageLink9: "#!",
  imageLink10: "#!",
  imageLink11: "#!",
  imageLink12: "#!",
  visibleDivs: "1",
}


App.propTypes = {
  image1: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
  image4: PropTypes.string,
  image5: PropTypes.string,
  image6: PropTypes.string,
  image7: PropTypes.string,
  image8: PropTypes.string,
  image9: PropTypes.string,
  image10: PropTypes.string,
  image11: PropTypes.string,
  image12: PropTypes.string,
  imageLink1: PropTypes.string,
  imageLink2: PropTypes.string,
  imageLink3: PropTypes.string,
  imageLink4: PropTypes.string,
  imageLink5: PropTypes.string,
  imageLink6: PropTypes.string,
  imageLink7: PropTypes.string,
  imageLink8: PropTypes.string,
  imageLink9: PropTypes.string,
  imageLink10: PropTypes.string,
  imageLink11: PropTypes.string,
  imageLink12: PropTypes.string,
  componentTitle: PropTypes.string,
  sampleList: PropTypes.array,
};

export default withStyles(styles)(App);
