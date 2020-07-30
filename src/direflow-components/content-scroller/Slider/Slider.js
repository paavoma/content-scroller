import React, { Component } from 'react';
import Slide from '../SliderControls/Slide';
import LeftPointer from '../SliderControls/LeftPointer';
import RightPointer from '../SliderControls/RightPointer';




class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0,
            length: ''
        };
        
    }
    
    componentDidMount() {
        this.setState({
            length: this.props.elements.length,
            
        })
        
        this.changeImageOnTimer(8000);
    }

    changeImageOnTimer(intervalTime){
        let interval="";
        clearInterval(this.interval);
        this.interval = setInterval(() => {
            this.changeNextSlide();
          }, intervalTime);
          return () => clearInterval(this.interval);

    }

    changePrevSlide() {
        let index = this.state.activeIndex;
        let length = this.state.length;
        if (index < 1) {
            index = length - Number(this.props.visibleDivs);
        }
        else {
            index=index-Number(this.props.visibleDivs);
        }
        this.setState({
            activeIndex: index
        });
        this.changeImageOnTimer(8000);
    }
    changeNextSlide() {
        let length = this.state.length;
        let index = this.state.activeIndex;


        if (index >= length-Number(this.props.visibleDivs) || index === length - Number(this.props.visibleDivs)) {
            index = 0;
        }
        else{
            index = index+Number(this.props.visibleDivs);
        }
        this.setState({
            activeIndex: index
        });
        this.changeImageOnTimer(8000);
        
    }

    render() {
        return (

            <div className='app'>

                <div className='slider-items'>
                    <table>
                    <tbody className='Table'>
                        <tr className='TrSlide'>
                            <td className='LeftArrowTd' >
                                <LeftPointer
                                    changePrevSlide={() => this.changePrevSlide()}
                                />
                            </td>
                            <td className='ContentTd'>
                                <div className='SlideContent'>
                                    <Slide
                                        activeIndex={this.state.activeIndex}
                                        elements={this.props.elements}
                                        visibleDivs={this.props.visibleDivs}
                                    />
                                </div>
                            </td>

                            <td className='RightArrowTd' >
                                <RightPointer
                                    changeNextSlide={() => this.changeNextSlide()}
                                />
                            </td>
                        </tr>

                    </tbody>
                    </table>
                </div>

            </div>
        );
    }



}

export default Slider;