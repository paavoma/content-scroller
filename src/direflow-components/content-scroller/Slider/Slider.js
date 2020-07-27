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
        let interval ="";
    }
    
    componentDidMount() {
        this.setState({
            length: this.props.elements.length
        })
        this.changeImageOnTimer(8000);
    }

    changeImageOnTimer(intervalTime){
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
            index = length - 1;
        }
        else {
            index--;
        }
        this.setState({
            activeIndex: index
        });
        this.changeImageOnTimer(8000);
    }
    changeNextSlide() {
        let length = this.state.length;
        let index = this.state.activeIndex;


        if (index === length - 1) {
            index = 0
        }
        else {
            index++;
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
                                <div className='slider-text'>
                                    <Slide
                                        activeIndex={this.state.activeIndex}
                                        elements={this.props.elements}
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