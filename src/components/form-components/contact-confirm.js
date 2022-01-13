import { useNavigate } from 'react-router';
import { useEffect } from 'react/cjs/react.development';

function ContactConfirm() {
    let navigate = useNavigate();

    const redirect = () => setTimeout(function() {navigate("/")}, 3000);

    useEffect(() => {
        redirect()
    }, [])

    return (
        <>
            <h2>Thank you!</h2>
            <h4>Your form has been recieved and I will be in touch shortly.</h4>
            <span>
                If you are not redirected shortly, <a href="/index.html" style={{color:"blue"}}>click here </a> 
                to return to the home page.
            </span>
        </>
    )
}

export default ContactConfirm