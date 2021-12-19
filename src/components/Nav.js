import { React, useState } from "react";

import { Anchor } from 'antd';
const { Link } = Anchor;

function Nav({anchorLinks}) {

    const [showLinks, setShowLinks] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShowLinks(!showLinks)
    }

    const handleMenuToggle = () => {
        setShowLinks(!showLinks)
    }

    return (
        <nav>
            <div className="nav-center">

                <div className="nav-header">
                    <h1>Sihota <span className="h1color">Tutoring</span></h1>
                    <button className="nav-toggle" onClick={() => handleMenuToggle()}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>

                <Anchor affix={false} onClick={handleClick}>
                        <ul className={`links ${showLinks ? "show-links" : ""}`}>
                            <li>
                                <Link className="anchor-link" href="#home" title="Home"/>
                            </li>
                            <li>
                                <Link className="anchor-link" href="#how-it-works" title="How it works"/>
                            </li>
                            <li>
                                <Link className="anchor-link" href="#what-i-offer" title="What I offer"/>
                            </li>
                            <li>
                                <Link className="anchor-link" href="#about-me" title="About me"/>
                            </li>
                            <li>
                                <Link className="anchor-link" href="#testimonies" title="Testimonies"/>
                            </li>
                            <li>
                                <Link className="anchor-link" href="#contact" title="Contact me"/>
                            </li>
                        </ul>
                </Anchor>
            </div>
        </nav>
    )
}

export default Nav