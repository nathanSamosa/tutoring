import { useState, useEffect } from "react"

function ReviewForm({ setSuccessfulLogin }) {

    const [validPasscodes, setValidPasscodes] = useState([])
    const [userInput, setUserInput] = useState()

    const fetchReviews = async() => {
        const result = await fetch("http://localhost:3000/passcodes")
        const data = await result.json()
        setValidPasscodes(data)
    }
    
    useEffect(() => {
        if(validPasscodes.length == 0) fetchReviews()
    }, [validPasscodes])

    const handleChange = e => setUserInput(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()
        validPasscodes.includes(userInput) ? setSuccessfulLogin(userInput) : alert("Sorry, this passcode is not recognised.")
    }

    return (
        <>
            <h1>Hi there!</h1>
            <span>Please enter the login code provided to you during our session.</span>
            
            <form className="email-form">

                <input
                    id="passcode-input"
                    type="text"
                    placeholder="Enter your login code"
                    required
                    onChange={e => handleChange(e)}
                />

                <div id="button-container">

                        <button
                            id="email-form-submit"
                            type="submit"
                            onClick={e => handleSubmit(e)}
                        >
                            Submit
                        </button>

                    <div id="pseudo">Submit</div>
                </div>
            </form>
            
        </>
    )
}

export default ReviewForm