import { Link } from "react-router-dom"

import email from "../assets/images/email.png"
import phone from "../assets/images/telephone.png"
import facebook from "../assets/images/facebook.png"

function Contact() {
    return (
        <div className="background-wrap-contact">
        <section className="section-center contact">
            <h3>Contact Me</h3>
            <section className="contact-grid">
                    <div className="contact-info">
                        <div className="info-holder">
                            <div className="contact-aside">
                                <article>
                                    <div className="quote-cell">
                                        <img src={email}></img>
                                    </div>
                                    <div>
                                        <h4>Email</h4>
                                        <span>sihota.learn@gmail.com</span>
                                    </div>
                                </article>
                                <article>
                                    <div className="quote-cell">
                                        <img src={phone}></img>
                                    </div>
                                    <div>
                                        <h4>Mobile</h4>
                                        <span>07368470068</span>
                                    </div>
                                </article>
                                <article>
                                    <div className="quote-cell">
                                        <img src={facebook}></img>
                                    </div>
                                    <div>
                                        <h4>Facebook</h4>
                                        <span><a href="https://www.facebook.com/nathan.sihota/">facebook.com/nathan</a></span>
                                    </div>
                                </article>
                            </div>
                        </div>       
                    </div>

                    <div className="vl"></div>

                    <div className="contact-text">
                        <p>Tutoring sessions are available on weekdays from 6:30pm, or any time Saturday/Sunday, for £25/hour.</p>
                        <p>Text, call or email me at any time to discuss arranging tutoring.</p>
                        <p>
                            If we already hold regular sessions together, feel free to contact me at any time with questions
                            regarding course work or queries regarding my services.
                        </p>
                    </div>

                    <div className="grid-but">
                        <Link to="/contact">
                            <button className="button">Get in touch now</button>
                        </Link>
                    </div>
            </section>
        </section>
    </div>
    )
}

export default Contact