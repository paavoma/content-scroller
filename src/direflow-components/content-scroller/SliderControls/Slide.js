import React, { Component } from 'react';


class Slide extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                {
                    this.props.elements.map((s, index) => {
                        return (

                            <div className={index === this.props.activeIndex ? "Active" : "Inactive"} key={index} style={{ backgroundImage: `url(${s})` }}>
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