import React from "react"
import './Box.css'

function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#22222222" : "transparent"
    }

    return(
        <button 
            key={props.id}  
            style={styles} 
            className="square" 
            onClick={props.handleClick}>
        </button>
    );
}

export default Box;