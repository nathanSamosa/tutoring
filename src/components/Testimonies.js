import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import leftArrow from "../assets/images/left-arrow.png"
import rightArrow from "../assets/images/right-arrow.png"
import quote from "../assets/images/quote.png"

export default function Testimonies() {

    const [reviewsArr, setReviewsArr] = useState([])
    const [reviewsIndex, setReviewsIndex] = useState(0)
    
    const fetchReviews = async() => {
        const result = await fetch("http://localhost:3000/reviews")
        const data = await result.json()
        setReviewsArr(data)
    }
    
    useEffect(() => {
        if(reviewsArr.length == 0) fetchReviews()
    }, [reviewsArr])

    const handleClick = operator => {
        let tempIndex = eval(`${reviewsIndex} ${operator} 1`)
        0 <= tempIndex && tempIndex <= reviewsArr.length - 1 ? setReviewsIndex(tempIndex) : console.log("invalid reviewsIndex!")
    }
    
    return (
        <div className="background-wrap-testimonies">
            <section className="section-center testimonies">
                <h3>My reviews</h3>
                {reviewsArr.length > 0 && 
                
                    <section className="review-grid">
                            <div className="review-name">
                                <div className="info-holder">
                                    <div className="info-grid">
                                        <div className="quote-cell"><img src={quote}></img></div>
                                        <div>
                                            <h4 id="review-firstName">{reviewsArr[reviewsIndex].firstName} </h4>
                                            <h4 id="review-lastName">{reviewsArr[reviewsIndex].lastName}</h4>
                                            <span id="review-date">{reviewsArr[reviewsIndex].date}</span>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>

                            <div className="vl"></div>

                            <div className="review-text">
                                <p id="review-textbox">{reviewsArr[reviewsIndex].message}</p>
                            </div>

                            <div className="review-arrows">
                                <img
                                    className={`arrow-left ${reviewsIndex == 0 ? "restrict" : ""}`}
                                    src={leftArrow} 
                                    onClick={() => handleClick("-")}>
                                </img>
                                <img
                                    className={`arrow-right ${reviewsIndex == reviewsArr.length - 1 ? "restrict" : ""}`}
                                    src={rightArrow}
                                    onClick={() => handleClick("+")}>
                                </img>
                            </div> 

                            <div></div>

                            <div className="grid-but">
                            <Link to="/review">

                                    <button className="button">Add/edit your review</button>

                            </Link>
                            </div>
                    </section>
                }
            </section>
        </div>
    )
}