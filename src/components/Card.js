import React from "react";

const Card = (props) => {
    const id = "https://avatars.dicebear.com/api/avataaars/" + props.id + ".svg?size=300"
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="img" src= {id}/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;