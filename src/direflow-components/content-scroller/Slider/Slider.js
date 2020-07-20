import React, { Component } from 'react';
import Slide from '../SliderControls/Slide';
import LeftPointer from '../SliderControls/LeftPointer';
import RightPointer from '../SliderControls/RightPointer';
import classes from './Slider.module.css';



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
            length: this.props.elements.length
        })

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
    }

    render() {
        console.log(this.props.elements);
        console.log("Slide length is " + this.state.length)
        console.log("Slide length is " + this.state.length)
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