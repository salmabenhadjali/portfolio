import React from "react"

export default function Navbar(props) {
    return (
        <nav className={props.darkMode ? "dark" : ""}>
            <img 
                className="nav--icon" 
                src="react-logo.svg" 
                alt="logo" 
                width="35.93" 
                height="32"
            />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <div className="toogler">
                <p className="toogler--light">Light</p>
                    <div 
                        className="toogler--slider"
                        onClick={props.toggleDarkMode}
                    >
                        <div className="toogler--slider--circle"></div>
                    </div>
                <p className="toogler--dark">Dark</p>
            </div>
        </nav>
    )
}