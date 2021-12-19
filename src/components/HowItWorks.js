import growth from "../assets/images/growth.png"
import idea from "../assets/images/idea.png"
import abcBlock from "../assets/images/abc-block.png"

function HowItWorks() {
    return (
        <div className="background-wrap-how-it-works">
            <div className="wave-background-1"></div>
            <div className="wave-background-2"></div>
            <section className="section-center how-it-works">
                <h3>How it works</h3>
                <div className="how-it-works-grid">
                    <article className="how-it-works-item">
                        <img src={growth}></img>
                        <h4>Collaborative learning</h4>
                        <p>
                            My priority is to focus our 1-to-1 sessions so that the student gets the most out
                            of our time together. This is a <b>collaborative process</b> and is unique to each
                            student’s needs and goals. We will discuss the student’s experience, strengths,
                            and knowledge to help them <b>maximise their growth and potential</b>, and to give them
                            the tools to reach their goals and develop the skills to research, learn and <b>excel
                            independently in their future challenges</b>.
                        </p>
                    </article>
                    <article className="how-it-works-item">
                        <img src={idea}></img>
                        <h4>Growth mindset</h4>
                        <p>
                            <b>Every student is different</b>, with their own talents and weaknesses. Maths is accessible
                            to everyone, and most students struggle with <b>putting its abstract ideas into tangible context
                            </b>. This is a skill rarely taught in school, but it is essential in growing
                            anyone’s confidence in their own abilities. <b>A growth mindset is important</b> in realising
                            that you are capable in understanding, and that facing new ideas can be exciting. This
                            enables a student to learn in new enviroments, and <b>encourages them to chase new challenges</b>.
                        </p>
                    </article>
                    <article className="how-it-works-item">
                        <img src={abcBlock}></img>
                        <h4>The "what" and "why"</h4>
                        <p>
                            An important aspect of maths is the <b>why</b> we use certain methods. Some students may be
                            confident in learning, but will <b>lack the fundamental reasoning</b> behind the formulae
                            and concepts they practice. Concepts and ideas in mathematics have close relationships
                            to each other, and <b>understanding the origins of ideas</b> and why they work gives students
                            the tools to face brand new concepts and problems with <b>an arsenal of understood and developed
                            tools</b>.
                        </p>
                    </article>
                </div>
            </section>
        
        </div>
    )
}

export default HowItWorks