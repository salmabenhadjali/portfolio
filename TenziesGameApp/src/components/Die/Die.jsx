import './Die.css'

function Die(props) {
    return (
        <div 
            className={`die-face ${props.isHeld ? 'held' : ''}`}
            onClick={() => props.holdDice(props.id)}
        >
            <h2>{props.value}</h2>
        </div>
    )
}

export default Die