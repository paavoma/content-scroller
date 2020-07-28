import React, { Component } from 'react';
import image1 from "../../../assets/default.png"

class Slide extends Component {
    

    render() {
        return (
            <section>
                {
                    this.props.elements.map((s, index) => {
                        return (

                            <div className={index === this.props.activeIndex ? "Active" : "Inactive"} key={index} style={{ backgroundImage: `url(${s})` }}>
                                <img className="Image" src={s} alt={image1}></img>
                                
                            </div>

                        )
                    }
                    )}
            </section>
        )
    }
}
export default Slide;