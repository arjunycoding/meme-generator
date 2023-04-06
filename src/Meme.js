import React, { useState } from "react"
import data from "./data"

export default function Meme() {
    const [formData, setFormData] = useState({
        topText: "",
        bottomText: "",
    })

    const [memeImage, setMemeImage] = useState({
        topText: "",
        bottomText: "",
        img: "https://i.imgflip.com/wxica.jpg"
    })
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMemeImage(data.data.memes))
    }, [])

    function getMemeImage() {
        const memesArray = data.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(prevMemeImage => {
            return {
                ...prevMemeImage,
                img: memesArray[randomNumber].url
            }
        })

    }
    function handleFirstName(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                topText: event.target.value
            }
        })
    }
    function handleLastName(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                bottomText: event.target.value
            }
        })
    }
    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    onChange={handleFirstName}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    onChange={handleLastName}
                />
                <button
                    className="form--button" onClick={getMemeImage}>
                    Get a new meme image 🖼
                </button>
            </div>
            <br />
            <br />
            <div className="main--imageAndText">
                <h2 className="meme--text top">{formData.topText}</h2>
                <h2 className="meme--text bottom">{formData.bottomText}</h2>
                < img src={memeImage.img} alt="meme" className="form--image" />
            </div>
        </main>
    )
}