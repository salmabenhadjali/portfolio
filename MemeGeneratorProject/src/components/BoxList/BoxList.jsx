import React from "react"
import './BoxList.css'
import squaresData from '../../data/boxes'
import Box from '../../components/Box/Box'

function BoxList() {
    const [squares, setSquares] = React.useState(squaresData)
    
    const squareElements = squares.map(square => (
        <Box key={square.id} on={square.on} handleClick={() => toogle(square.id)}/>
    ))

    function toogle(id) {
        setSquares(prev => {
            return squares.map(square => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }

    return(
        <>
            <h1>Boxes will go here</h1>
            <div className="squares">
                {squareElements}
            </div>
        </>
    );
}

export default BoxList;