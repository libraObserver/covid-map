import React from 'react';
import Styled from 'styled-components';
import './Slider.css';



class Slider extends React.Component {
    state = {
        value = 50
    }



    render() {
        return (
            <div className="slider">
                <input type="range" min={0} max={100} value = {this.state.value} className="slider-props" onChange={this.handleOnChange}/>
            </div>
        )
    }
}



export default Slider;
