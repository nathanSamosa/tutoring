import { useState, useEffect } from "react"

function ReviewForm({userPasscode, setSuccessfulPush}) {

    //INIT REVIEW FORM
    var today = new Date();
    var date = today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear()
    
    const [userForm, setUserForm] = useState({
        "passcode": userPasscode,
        "firstName": "",
        "lastName": "",
        "date": date,
        "message": ""
    })

    //UPDATE REVIEW FORM WITH POSSIBLE EXISTING DATA
    const [existingReview, setExistingReview] = useState(false)

    const initFormValues = review => {
        console.log(`%c initFormValues: Review found!`, "color:grey")
        console.log(review)
        setUserForm({
            ...userForm,
            firstName:review.firstName,
            lastName:review.lastName,
            message:review.message,
            id:review.id
        })
    }

    //POST, PATCH, DELETE
    const asyncAddReview = async (bodyToAdd) => {
        const fetchMethod = existingReview ? 'PATCH' : 'POST';
        const fetchStr = Boolean(existingReview)
            ? `http://localhost:3000/reviews/${userForm.id}`
            : `http://localhost:3000/reviews`

        try {
            const response = await fetch(fetchStr, {
                method: fetchMethod,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bodyToAdd)
            });
            const data = await response.json();
                setSuccessfulPush(true)
    
        } catch(error) {
            console.log(error)
            } 
    }

    const asyncDeleteReview = async (ReviewId) => {
        try {
            const response = await fetch(`http://localhost:3000/reviews/${ReviewId}`, {
                method: 'DELETE',
            });
            const data = await response.json();
                setSuccessfulPush(true)

        } catch(error) {
            console.log(error)
        } 
    }

    //EVENT HANDLERS
    const handleDelete = e => {
        e.preventDefault()
        window.confirm("Are you sure you want to delete your review?")
            ? asyncDeleteReview(userForm.id)
            : console.log("delete canceled");
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(userForm)
        asyncAddReview(userForm)
    }

    const handleChange = e => {
        console.log("%c handleChange: updating form...", "color:grey")
        const reviewProp = e.target.id.substring(0, e.target.id.length - 6)
        setUserForm({...userForm, [reviewProp]: e.target.value})
    }

    //FETCH DATA
    useEffect(() => {
        existingReview ? initFormValues(existingReview) : console.log("%c initFormValues: No review found.", "color:grey")
    }, [existingReview])

    const findExistingReview = reviewsArr => {
        console.log(`%c findExistingReview: ${userPasscode}`, "color:grey")
        setExistingReview(reviewsArr.find(review => review.passcode === userPasscode))
    }

    const fetchReviews = async() => {
        const result = await fetch("http://localhost:3000/reviews")
        const data = await result.json()
        findExistingReview(data)
    }
    
    useEffect(() => fetchReviews(), [])

    return (
        <>
            {userPasscode && 
                <>
                    <h1>Thank you for writing a review!</h1>
                    <span>Let me and others know what you think.</span>
                    
                    <form className="email-form">

                        <section className="name-input">
                            <div>
                                <label htmlFor="firstName-input">First Name</label>
                                <input
                                    id="firstName-input"
                                    type="text"
                                    placeholder="First Name"
                                    value={userForm["firstName"]}
                                    onChange={e => handleChange(e)}
                                    required
                                ></input>
                            </div>
                            <div>
                                <label htmlFor="lastName-input">Last Name</label>
                                <input
                                    id="lastName-input"
                                    type="text"
                                    placeholder="Last name"
                                    value={userForm["lastName"]}
                                    onChange={e => handleChange(e)}
                                    required>
                                </input>
                            </div>
                        </section>

                        <label htmlFor="message-input">Your review</label>
                        <textarea
                            id="message-input"
                            placeholder="Enter your review here"
                            value={userForm["message"]}
                            onChange={e => handleChange(e)}
                            required>
                        </textarea>


                        <div className="button-container">
                            <button id="email-form-submit" type="submit" onClick={e => handleSubmit(e)}>Submit</button>
                            <div id="pseudo">Submit</div>
                        </div>

                        {Boolean(existingReview) &&
                            <div className="button-container delete-container">
                                <button id="delete-review-but" type="submit" onClick={e => handleDelete(e)}>Delete</button>
                                <div id="pseudo-delete">Delete</div>
                            </div>
                        }
                        
                        
                    </form>
                </>   
            }
        </>
    )
}

export default ReviewForm