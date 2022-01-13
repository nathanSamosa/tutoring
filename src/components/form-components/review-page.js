import { useState } from "react";

import ReviewLogin from "./review-login"
import ReviewForm from "./review-form"
import ReviewConfirm from "./review-confirm";

function ReviewPage() {
    
    const [successfulLogin, setSuccessfulLogin] = useState()
    const [successfulPush, setSuccessfulPush] = useState(false)

    console.log("%c successfulLogin:", "color:yellow", successfulLogin)

    return (
    <>

        {Boolean(!successfulLogin) &&
            <ReviewLogin 
                setSuccessfulLogin={setSuccessfulLogin}
            />
        }

        {Boolean(successfulLogin) && !successfulPush &&
            <ReviewForm
                userPasscode={successfulLogin}
                setSuccessfulPush={setSuccessfulPush}
            />
        }

        {successfulPush &&
            <ReviewConfirm/>
        }

        <style
            dangerouslySetInnerHTML={{
                    __html: `
                    html {
                        min-height: 100%;
                        background-image: linear-gradient(to bottom right, var(--clr-primary-light), var(--clr-grey-5));
                        display: flex;
                        justify-content: center;
                        
                    }
                    
                    body {
                        background-color: white;
                        width: 90vw;
                        margin: 3rem auto;
                        max-width: 800px;
                        border-radius: var(--radius);
                        box-shadow: var(--dark-shadow);
                        text-align: center;
                        padding: 40px;
                        height: min-content;
                        text-shadow: 0;
                    }
                    
                    .email-form {
                        display: grid;
                        height: min-content;
                        grid-template-columns: 1fr;
                        text-align: left;
                        margin: 3rem auto;
                        width: 90%;
                        position: relative;
                        font-family: var(--ff-primary);
                    }

                    #message-input,
                    #focused-input,
                    #textbox-input {
                        font-family: var(--ff-primary);
                    }
                    
                    input,
                    select,
                    textarea {
                        font-size: 1.2rem;
                        resize: none;
                        height: 60px;
                        padding: 10px 0 20px 10px;
                        border: none;
                        border-bottom: solid 3px #E7E7E7;
                        margin: 10px 0 40px 0;
                        font-weight: bold;
                        width: 100%;
                    }
                    
                    input:focus,
                    select:focus,
                    textarea:focus {
                        outline: none;
                    }
                    
                    .button-container {
                        position: relative;
                        display: block;
                        height: 50px;
                        margin-bottom: 1rem;
                    }
                    
                    ::placeholder {
                        color: #D7D7D7;
                    }
                    
                    .name-input {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        column-gap: 50px;
                    }
                    
                    textarea {
                        min-height: 100px;
                        resize: none;
                    }
                    
                    button, #pseudo, #pseudo-delete {
                        position: absolute;
                        left: 0;
                        background-image: linear-gradient(to left, #59BEDE, var(--clr-primary-dark));
                        border-radius: 25px;
                        height: 50px;
                        width: 100%;
                        line-height: 50px;
                        font-size: 1.2rem;
                        text-align: center;
                        color: white;
                        transition-duration: 0.3s;
                        border: none;
                        box-shadow: 0 0 10px 2px rgb(216, 216, 216);
                        z-index: 100;
                    }
                    #pseudo {
                        z-index: 50;
                        background-image: linear-gradient(to right, #59BEDE, var(--clr-grey-5));
                        font-weight: bold;
                    }
                    #pseudo-delete {
                        z-index: 50;
                        background-image: linear-gradient(to right, #59BEDE, var(--clr-red));
                        font-weight: bold;
                    }
                    #pseudo:hover {
                        box-shadow: 0 0 10px 5px black;
                        font-weight: bold;
                    }
                    button:hover {
                        opacity: 0;
                    }
                    
                    @media (max-width: 660px) {
                        .name-input {
                            grid-template-columns: 1fr;
                        }
                    }
                    
                    .invisible {
                        display: none;
                    }`
            }}
        />
    </>
    )
}

export default ReviewPage