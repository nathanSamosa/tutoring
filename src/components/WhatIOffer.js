import one from "../assets/images/one.png"
import two from "../assets/images/two.png"
import three from "../assets/images/three.png"
import four from "../assets/images/four.png"

function WhatIOffer() {
    return (
        <div className="background-wrap-what-i-offer">
            <div className="wave-background-3"></div>
            <div className="wave-background-4"></div>

            <section className="section-center what-i-offer">
                <h3>What I offer</h3>
                <div className="highlight">
                    <span>
                        1-to-1 sessions are <span className="free">£25 per hour</span>,
                        and can be held in-person, on Zoom or a suitable public setting.
                    </span>
                </div>
                <h4>Before we start...</h4>
                <p>
                    We will discuss via mobile, email or Zoom the student's age, learning level/year and their
                    goal for tutoring. We will guage their general understanding and see how it compares to
                    what is expected from the school curriculum, and highlight topics that the student knows
                    they would like to improve in first.
                </p>
                <hr></hr>
                <h4>For our first session...</h4>
                <p>
                    I will discuss with the student their experiences with Maths in school, and how confident they
                    are in their own ability. We will talk about the school's expectations of them and develop a plan
                    and direction to achieve their goals. We will cover different methods of learning to figure out
                    what suits the student the best, and begin working on the concepts they struggle with the most.
                </p>
                <hr></hr>
                <h4>During future sessions...</h4>
                <p>
                    We will use a learning framework with a proven track-record of success to plan our time together:
                </p>
                <section className="offer-grid">
                    <article className="offer-grid-item">
                        <img src={one}></img>
                        <div>
                            <h4>Recap</h4>
                            <p>
                                Quickly overview what we learned in the last session. Review any work that was
                                given in our last session, and what the student has been covering in school.
                            </p>
                        </div>
                    </article>
                    <article className="offer-grid-item">
                        <img src={two}></img>
                        <div>
                            <h4>Assessing our goals</h4>
                            <p>
                                Understand the detailed marking criteria established by examination boards and
                                work on exactly how the student will get the highest grade they can achieve.
                                Set out the learning outcomes for the session.
                            </p>
                        </div>
                    </article>
                    <article className="offer-grid-item">
                        <img src={three}></img>
                        <div>
                            <h4>Multimedia learning</h4>
                            <p>
                                Utilising a range of media (quizzes, videos, past papers, teacher's resources,
                                visual and hands-on learning), we aim to develop a sound and well-rounded understanding
                                of each of the components in the learning outcomes.
                            </p>
                        </div>
                    </article>
                    <article className="offer-grid-item">
                        <img src={four}></img>
                        <div>
                            <h4>Planning our next session</h4>
                            <p>
                                Together we will discuss the successes of today's session and what we can improve on.
                                I will suggest a topic for the next session and may set additional work for students
                                who are capable.
                            </p>
                        </div>
                    </article>
                </section>
                <hr></hr>
            </section>
        </div>  
    )
}

export default WhatIOffer