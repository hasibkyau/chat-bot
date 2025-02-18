import React from "react";
import './banner.css'

const BANNER = (props) => {
    return (
        <div>
            <div className="banner" style={{backgroundImage:props.bgImg}}>
                <div className="container">
                    <div className="row" id="hello">
                        <div className="banner-text">
                            <div className="companyName">
                                <span style={{ color: "white"}}>{props.companyName.fname}</span>
                                <span style={{ color: "tomato"}}>{props.companyName.lname}</span>
                            </div>
                            <h1 style={{ color: "white" }}>{props.title}</h1>
                            <h5 style={{ color: "white" }}>{props.subtitle}</h5>

                            {/* <Button color="danger" size="sm">Sign Up for Free</Button> */}
                            <button type="button" class= "btn btn-danger" style = {{ backgroundColor: props.button.backgroundColor, width: props.button.size}}>Sign Up for Free</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default BANNER;