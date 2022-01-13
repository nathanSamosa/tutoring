function AboutMe() {
    return (
        <div className="background-wrap-about-me">
        
            <section className="section-center about-me">
                <div className="tabs">
                    <input type="radio" name="tabs" id="tabone" defaultChecked="checked"></input>
                    <label id="labelone" htmlFor="tabone"><h4>About me</h4></label>
                    <div id="pone" className="tab">
                        <p>
                            Hi there! I'm Nathan Sihota, a 21-year-old software development student based in Linlithgow and Falkirk.
                            I am a hard-working, conscientious and self-motivated learner, looking to graduate in 2022 and start a
                            career in the tech industry.
                            <br></br><br></br>
                            Growing up in Linlithgow and attending Linlithgow Academy, I was always gifted academically. Achieving
                            in mathematics a year or two ahead of my age, I was always passionate and motivated by numbers and took
                            pride in my ability to learn and teach. From a young age, I have always been interested in achieving the
                            same goal with different methods, and love to learn how different people approach the same problem.
                            <br></br><br></br>
                            One of the main reasons for my success is my ability to tackle the same problem in several unique ways.
                            I am driven to teach others this practice in order for them to excel in any aspect of their life. It is
                            one of the most important skills you need to achieve your goals, and unfortunately, it is a skill most
                            are left to learn on their own - my goal is to change that.
                        </p>
                    </div>
                    
                    <input type="radio" name="tabs" id="tabtwo"></input>
                    <label id="labeltwo" htmlFor="tabtwo"><h4>My experience</h4></label>
                    <div id="ptwo" className="tab">
                        <p>
                            Growing up, I spent my spare time in class and my evenings teaching others maths. With the help and expertise
                            of my mother, one of the most experienced and revered head teachers in the region, I have tutored my brother
                            and cousins from a young age to grow and train their mental agility, helping them learn and excel in their
                            futures independently.
                            <br></br><br></br>
                            From the age of 15, I was working as an assistant at Kumon Maths and English, teaching children of all ages
                            and abilities maths through regular practice and engaging puzzles and conversations to raise their interest;
                            learning should be rewarding, and I am able to show that to anyone struggling with their learning journey.
                            <br></br><br></br>
                            After achieving straight As in Higher and Advanced Higher, and scoring one of the highest marks in Mathematics
                            across Scotland that year, I went to Heriot-Watt University to study Actuarial Science - a highly competitive
                            finance and statistics course saught out by undergraduates worldwide - before changing direction towards software
                            development and tech.
                        </p>
                    </div>
                    
                    <input type="radio" name="tabs" id="tabthree"></input>
                    <label id="labelthree" htmlFor="tabthree"><h4>My resources</h4></label>
                    <div id="pthree" className="tab">
                        <p>
                            With a family history in teaching and the school curriculum, I have an acute understanding of the school curriculum
                            and expectations of growth in all years of learning. I consult with head teachers of schools throughout West Lothian,
                            as well as members of the SQA board to get an understanding of their expectations of students and the
                            standards/guidlines they are graded against.
                            <br></br><br></br>
                            My material used in sessions is heavily reasearched using the SQA, and aided by sources such as the BBC, Kumon and
                            university exam boards. My demonstrations and examples are derived and inspired by those taught in Heriot-Watt
                            University to students of all abilities, with their techniques, language and methodology adapted for all levels
                            of understanding and age.
                            <br></br><br></br>
                            Any student of mine can rest assured that the material I provide them is tailored from across several respected
                            sources, and geared towards their own school's grading/epectations. My methods of teaching are refined from
                            years of practice and mentoring from the best in the business.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMe