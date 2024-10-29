import React from "react"
import Navbar from "./Components/Navbar"
import Main from "./Components/Main"
import Footer from "./Components/Footer.jsx";

export default function App() {
    const [darkMode, setDarkMode] = React.useState(window.matchMedia("(prefers-color-scheme: dark)").matches)

    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }

    return (
        <div className="container">
            <Navbar 
                darkMode={darkMode} 
                toggleDarkMode={toggleDarkMode}
            />
            <Main darkMode={darkMode}/>
            <Footer />
        </div>
    )
}