import React from "react";

function Buttton(props){
    return(
        <div className="Chip-root makeStyles-chipBlue-108 Chip-clickable">
            <span onClick={props.handleClick} className="form-Chip-label"
            >{props.text}
            </span>
            </div>
    );
}

export default Buttton;
