import Nav from "./components/Nav"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import WhatIOffer from "./components/WhatIOffer"
import AboutMe from "./components/AboutMe"
import Testimonies from "./components/Testimonies"
import Contact from "./components/Contact"

import "./styling/reset.css"
import "./styling/waves.css"

import "./styling/nav.css"
import "./styling/hero.css"
import "./styling/how-it-works.css"
import "./styling/what-i-offer.css"
import "./styling/about-me.css"
import "./styling/testimonies.css"
import "./styling/contact-me.css"

const Home = () => {
    return (
        <>
            <Nav/>

            <div className="anchor" id="home"></div>
            <Hero />

            <div className="anchor" id="how-it-works"></div>
            <HowItWorks />

            <div className="anchor" id="what-i-offer"></div>
            <WhatIOffer />

            <div className="anchor" id="about-me"></div>
            <AboutMe />

            <div className="anchor" id="testimonies"></div>
            <Testimonies />

            <div className="anchor" id="contact"></div>
            <Contact />
        </>
    )
    
}

export default Home