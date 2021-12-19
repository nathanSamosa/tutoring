import Nav from "./components/Nav"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import WhatIOffer from "./components/WhatIOffer"

import "./styling/reset.css"
import "./styling/waves.css"
import "./styling/nav.css"
import "./styling/hero.css"
import "./styling/how-it-works.css"
import "./styling/what-i-offer.css"

function App() {

    const anchorLinks = ["#home", "#how-it-works"]

    return (
        <>
            <Nav anchorLinks={anchorLinks}/>

            <div className="anchor" id="home"></div>
            <Hero />

            <div className="anchor" id="how-it-works"></div>
            <HowItWorks />

            <div className="anchor" id="what-i-offer"></div>
            <WhatIOffer />
        </>
        
    );
}

export default App;
