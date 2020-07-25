import React, { Component } from 'react';
import classes from '../Slider/Slider.module.css';
import image from '../../../assets/dog.jpg';


class Slide extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        


    }


    
    render() {
        console.log("Loaded to slide: " + this.props.elements);

        
        return (
            <section>
                {
                    this.props.elements.map((s, index) => {
                        
                        
                        

                        return (
                            
                            <div className={index === this.props.activeIndex ? "Active" : "Inactive"} key={index} style={{backgroundImage : `url(${s})`}}>
                                <img className="Image" src={s}></img>
                                



                            </div>
                            
                        )
                    }
                    )}
            </section>
        )
    }
}
export default Slide;