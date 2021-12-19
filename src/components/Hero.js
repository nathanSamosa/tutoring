import face from "../assets/images/face.jpg"

import { Anchor } from 'antd';
const { Link } = Anchor;

function Hero() {
    return (
        <div className="background-wrap-hero">
            <section className="section-center hero">
                <div className="hero-text">
                    <p>Hi there, I'm</p>
                    <h2>Nathan Sihota.</h2>
                    <p>
                        I am a freelance tutor, teaching mathematics from Primary school to Higher SQA.
                        With a family history in schools and of teachers, I have tutored children
                        of all ages through Kumon and the school system. I'm enthusiastic, motivated and
                        patient, and aim to share my passion for maths through relaxed sessions geared
                        towards each student's unique goals and needs.
                    </p>
                    <Anchor>
                        <div className="hero-link hero-link-wide">
                            <Link><a href="#about-me">Learn more about me</a></Link>
                        </div>
                    </Anchor>
                </div>
                <div className="hero-img">
                    <img src={face}></img>
                </div>
                <Anchor>
                    <div className="hero-link hero-link-thin">
                        <Link><a href="#about-me">Learn more about me</a></Link>
                    </div>
                </Anchor>
            </section>
        </div>
    )
}

export default Hero