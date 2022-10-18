import React from "react";

class Error extends React.Component {
    constructor(){
        super();
        this.state = {
            hasError: false
        }
    }


    render(){
        if(this.state.hasError){
            return <h1>Error</h1>
        }
        else{
            return this.props.children
        }
    }
}

export default Error;