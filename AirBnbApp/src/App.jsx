import React from "react"
import Navbar from "./Components/Navbar.jsx"
import Hero from "./Components/Hero.jsx"
import Card from "./Components/Card.jsx"
import data from "./data.js"

export default function App() {
    const cardComponents = data.map( card => {
        return (
            <Card
                key={card.id}
                {...card}
            />
        )
        }
    )
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cardComponents}
            </section>
        </div>
    )
}
