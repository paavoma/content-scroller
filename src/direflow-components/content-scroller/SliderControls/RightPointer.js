import React from 'react';
import rightPointerImg from '../../../assets/pointer_right.png';

const RightPointer = (props) => {
    return (
        <div onClick={props.changeNextSlide}>
        <img src={rightPointerImg} alt=">"/>
      </div>
    );
};


export default RightPointer;