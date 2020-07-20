import React, { Component } from 'react';
import classes from '../Slider/Slider.module.css';


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
                            <div className={index === this.props.activeIndex ? "Active" : "Inactive"} key={index}>
                                <h1>{s}</h1>
                                



                            </div>
                        )
                    }
                    )}
            </section>
        )
    }
}
export default Slide;