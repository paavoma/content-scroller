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
            length: this.props.elements[0].length,
            
        })
        
        
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
        const length = this.state.length;
        const visibleDivs = Number(this.props.visibleDivs);
        if (index < visibleDivs) {
            if (length % visibleDivs === 0)
            index =0;
            else 
            index = length - (length % visibleDivs);
        }
        else {
            index=index-visibleDivs;
        }
        this.setState({
            activeIndex: index
        });
        this.changeImageOnTimer(8000);
    }
    changeNextSlide() {
        let length = this.state.length;
        let index = this.state.activeIndex;
        const visibleDivs = Number(this.props.visibleDivs);

        if (index >= length-visibleDivs) {
            index = 0;
        }
        else{
            index = index+visibleDivs;
        }
        this.setState({
            activeIndex: index
        });
        this.changeImageOnTimer(8000);
        
    }

    render() {
        this.changeImageOnTimer(8000);
        return (
            
            <div className='app'>

                <div className='SliderItems'>
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