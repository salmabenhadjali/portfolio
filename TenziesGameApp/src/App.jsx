import { useState, useEffect } from 'react'
import Die from './components/Die/Die'
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'
import './App.css'

function App() {
  const [dice, setDice] = useState(() => allNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const heldDice = dice.filter(die => die.isHeld)
    const equalHeldDice = heldDice.filter(die => die.value === dice[0].value)
    setTenzies(equalHeldDice.length === dice.length)
    if(equalHeldDice.length === dice.length) {
      console.log("You won!")
    }
  }, [dice])

  function generateNewDie() {
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false
    }
  }

  function allNewDice() {
    const valuesArray = []
    for(let i=0; i<10; i++) {
      valuesArray.push(generateNewDie())
    }
    return valuesArray
  }

  function rollDice() {
    if (tenzies) {
      setTenzies(false)
      setDice(allNewDice())
    } else {
      setDice(dice.map(die => die.isHeld !== false ? die : generateNewDie()))
    }
  }

  function holdDice(id) {
    setDice(dice.map(die => die.id === id ? {...die, isHeld: !die.isHeld} : die))
  }

  const dieElements = dice.map(die => (
    <Die 
      holdDice={holdDice}
      key={die.id} 
      {...die}
    />
  ))

  return (
    <main className='container'>
      {tenzies && <Confetti />}
      <h1>Tenzies</h1>
      <p>
        Roll untill all dice are the same. 
        Click each die to freeze it at its current value between rolls.
      </p>
      <div className='bloc'>
        {dieElements}
      </div>
      <button className='btn-roll' onClick={rollDice}>{tenzies ? 'New Game' : 'Roll'}</button>
    </main>
  )
}

export default App
