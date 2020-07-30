import React, { Component } from 'react';
import image1 from "../../../assets/default.png"

class Slide extends Component {
    
    
    
    render() {
        
        
        return (
            <section>
                {
                    this.props.elements.map((s, index) => {
                        
                        switch(this.props.visibleDivs){
                            case "1":
                            return (
                            
                                <div className={index === this.props.activeIndex ? "ActiveOneDiv" : "Inactive"} key={index} style={{ backgroundImage: `url(${s})` }}>
                                    <img className="Image" src={s} alt={image1}></img>
                                    
                                </div>
    
                            );
                            case "2":
                            return (
                                <div className={index === this.props.activeIndex ? "ActiveTwoDivs" : "Inactive"  && index === this.props.activeIndex+1 ? "ActiveTwoDivs" : "Inactive"} key={index} style={{ backgroundImage: `url(${s})` }}>
                                    <img className="Image" src={s} alt={image1}></img>
                                    
                                </div>
                            );
                            case "3":
                            return (
                                <div className={index === this.props.activeIndex ? "ActiveThreeDivs" : "Inactive" && index === this.props.activeIndex+1 ? "ActiveThreeDivs" : "Inactive" && index === this.props.activeIndex+2 ? "ActiveThreeDivs" : "Inactive"} key={index} style={{ backgroundImage: `url(${s})` }}>
                                    <img className="Image" src={s} alt={image1}></img>
                                    
                                </div>
                            );
                            default:
                            return (
                                <div className={index === this.props.activeIndex ? "ActiveOneDiv" : "Inactive"} key={index} style={{ backgroundImage: `url(${s})` }}>
                                    <img className="Image" src={s} alt={image1}></img>
                                    
                                </div>
                            );
                        }
                        
                    }
                    )}
            </section>
        )
    }
}
export default Slide;