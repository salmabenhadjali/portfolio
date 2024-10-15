import React from "react"
import './Meme.css'
 
function Meme(contact) {
    const [allMemes, setAllMemes] = React.useState([])
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/22bdq6.jpg"
    })

    React.useEffect(() => {
        async function getMeme() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMeme()
    }, [])

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function changeMeme() {
        const randomIndex = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomIndex].url

        setMeme(prev => ({
            ...prev,
            randomImage: url
        }))
    }

    return(
        <main>
            <div className="form">
                <label className="form--label">Top Text
                    <input 
                        name="topText"
                        className="form--input"
                        type="text"
                        placeholder="Top text"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                </label>
                <label 
                    htmlFor="bottom-text" 
                    className="form--label"
                >Bottom Text
                    <input 
                        id="bottom-text"
                        name="bottomText"
                        className="form--input"
                        type="text"
                        placeholder="Bottom text"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </label>
                <button 
                    className="form--button"
                    onClick={changeMeme}
                >
                    Get a new meme image  🖼
                </button>

                <div className="meme">
                    <img 
                        className="meme--image"
                        src={meme.randomImage}
                    />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </div>
        </main>
    );
}

export default Meme;