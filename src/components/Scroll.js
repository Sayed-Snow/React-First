import React from "react";

const Scroll=(props) =>{
    return(
        <div style={{overflow : 'scrpll'}}>
            {props.children}
        </div>
    );
}

export default Scroll