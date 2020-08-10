import React, { Component } from 'react';
import image1 from "../../../assets/default.png"

class Slide extends Component {
    
    
    render() {
        
        
        return (
            <section>
                <div className="ActiveDivParent">
                {
                    this.props.elements[0].map((s, index) => {
                        
                        switch(this.props.visibleDivs){
                            case "1":
                            return (
                            
                                <div className={index === this.props.activeIndex ? "ActiveOneDiv" : "Inactive"} key={index}>
                                    
                                    <a classname="DivLink" href={this.props.elements[1][index]}>
                                    <img className="ScrollerImage" src={s} alt={image1}></img>
                                    </a>
                                    
                                </div>
    
                            );
                            case "2":
                            return (
                                <div className={index === this.props.activeIndex ? "ActiveTwoDivs" : "Inactive"  && index === this.props.activeIndex+1 ? "ActiveTwoDivs" : "Inactive"} key={index}>
                                    <a classname="DivLink" href={this.props.elements[1][index]}>
                                    <img className="ScrollerImage" src={s} alt={image1}></img>
                                    </a>
                                    
                                </div>
                            );
                            case "3":
                            return (
                                
                                <div className={index === this.props.activeIndex ? "ActiveThreeDivs" : "Inactive" && 
                                                index === this.props.activeIndex+1 ? "ActiveThreeDivs" : "Inactive" && 
                                                index === this.props.activeIndex+2 ? "ActiveThreeDivs" : "Inactive"} 
                                                key={index} 
                                                >
                                                    <div className="DivImageContainer">
                                    <a classname="DivLink" href={this.props.elements[1][index]}>
                                    <img className="ScrollerImage" src={s} alt={image1}></img>
                                    </a>
                                    </div>
                                </div>
                                
                            );
                            default:
                            return (
                                <div className={index === this.props.activeIndex ? "ActiveOneDiv" : "Inactive"} key={index} style={{ backgroundImage: `url(${s})` }}>
                                    <img className="ScrollerImage" src={s} alt={image1}></img>
                                    
                                </div>
                            );
                        }
                        
                    }
                    )}
                    </div>
            </section>
        )
    }
}
export default Slide;