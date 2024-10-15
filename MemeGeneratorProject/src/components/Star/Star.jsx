import React from "react"
import './Star.css'
import filledStar from '../../assets/Card/filled-star.png'
import emptyStar from '../../assets/Card/empty-star.png'

function Star(props) {
    return(
        <img 
            src={props.isFilled ? filledStar : emptyStar} 
            className="card--favorite"
            onClick={props.handleClick}
        />
    );
}

export default Star;