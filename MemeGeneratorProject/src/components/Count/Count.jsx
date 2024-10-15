import React from "react"
import './Count.css'

function Count({number}) {
    return(
        <div className="counter">
            <div className="counter--count">
                <h1>{number}</h1>
            </div>
        </div>
    );
}

export default Count;