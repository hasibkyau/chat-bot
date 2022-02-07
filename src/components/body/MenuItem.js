import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";

const MenuItem = (props) =>{
    // console.log(props);
    var opc = "0.5";
    return(
        <Card style={{margin: "10px"}}>
            <CardBody>
                <CardImg
                 width="100%" alt={props.name} 
                 style = {{opacity:"0.5"}}
                 src={props.dish.image}></CardImg>
                    <CardImgOverlay>
                        <CardTitle 
                        onClick={()=>props.onDishSelect(props.dish)} 
                        style={{cursor: "pointer"}}>
                            {props.dish.name}
                        </CardTitle>
                    </CardImgOverlay>     
                    {/* <p>Price: {props.dish.price}</p> 
                    <p>{props.dish.description}</p>   */}
            </CardBody>
    
        </Card>
    );
}

export default MenuItem;