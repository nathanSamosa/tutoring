import { useState, useEffect } from "react";
import fetchAddresses from "../../fetch-routes.json"

function ContactForm({setSuccessfulPush}) {

    const [contactForm, setContactForm] = useState({
        "firstName": "",
        "lastName": "",
        "email": "",
        "level": "",
        "focus": "",
        "message": ""
    })
    console.log("contactForm", contactForm)
    console.log(fetchAddresses.local.contacts)

    const asyncPostContact = async() => {
        try {
            const response = await fetch(`${fetchAddresses.local.contacts}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contactForm)
            });
            const data = await response.json();
                setSuccessfulPush(true)
    
        } catch(error) {
            console.log(error)
        } 
    }

    const handleSubmit = e => {
        e.preventDefault()
        asyncPostContact()
    }

    const handleChange = e => {
        console.log("%c handleChange: updating form...", "color:grey")
        const contactProp = e.target.id.substring(0, e.target.id.length - 6)
        setContactForm({...contactForm, [contactProp]: e.target.value})
    }

    return (
        <>
        <h1>Get in touch!</h1>
        <span>Use the form below to send an email directly to me.</span>
        
        <form className="email-form" onSubmit={e => handleSubmit(e)}>

            <section className="name-input">
                <div>
                    <label htmlFor="firstName-input">First Name</label>
                    <input
                        id="firstName-input"
                        type="text"
                        placeholder="First name"
                        onChange={e => handleChange(e)}
                        required>     
                    </input>
                </div>
                <div>
                    <label htmlFor="lastName-input">Last Name</label>
                    <input
                        id="lastName-input"
                        type="text"
                        placeholder="Last name"
                        onChange={e => handleChange(e)}
                        required>
                    </input>
                </div>
            </section>

            <label htmlFor="email-input">Your email</label>
            <input
                id="email-input"
                type="email"
                placeholder="Enter your email address"
                onChange={e => handleChange(e)}
                required>
            </input>

            <label>What level are you looking for tutoring in?</label>
                <select
                    name="maths-level"
                    id="level-input"
                    defaultValue=""
                    onChange={e => handleChange(e)}
                    required
                >
                    <option className="default-select" value="" disabled hidden>Select level</option>
                    <option value="primary">Primary</option>
                    <option value="s1-s3">S1 to S3</option>
                    <option value="national 4">National 4</option>
                    <option value="national 5">National 5</option>
                    <option value="higher">Higher</option>
                </select>
            
            <label>Are there any topics you want to focus on the most?</label>
            <textarea
                id="focus-input"
                placeholder="Enter as many topics as you'd like"
                onChange={e => handleChange(e)}
            ></textarea>

            <label>Let me know more about you...</label>
            <textarea
                id="message-input"
                placeholder="Please leave a message with some details about yourself and what you hope to get out of our sessions"
                onChange={e => handleChange(e)}
                required>
            </textarea>

            <div id="button-container">
                <button id="email-form-submit" type="submit" >Submit</button>
                <div id="pseudo">Submit</div>
            </div>
        </form>
        </>
    )
}

export default ContactForm