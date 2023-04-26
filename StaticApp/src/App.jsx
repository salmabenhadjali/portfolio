import React from "react"
import Navbar from "./Components/Navbar"
import Main from "./Components/Main"
import Footer from "./Components/Footer.jsx";

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}