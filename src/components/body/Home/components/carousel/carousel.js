import React from "react";
import './carousel.css'
import lamp from './sunsetLamp.png'
import sofa from './SofaCollection.png'

const CarouselComponent = (props) => {
    return (
        <div className="container">
            <div className="sub-container">
                <div className="item">
                    <img src={lamp}></img>
                </div>
                <div className="item">
                    <img src={sofa}></img>
                </div>
            </div>
        </div>
    );

}

export default CarouselComponent;