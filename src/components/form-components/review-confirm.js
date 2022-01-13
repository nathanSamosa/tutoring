import { useNavigate } from 'react-router';
import { useEffect } from 'react/cjs/react.development';

function ReviewConfirm() {
    let navigate = useNavigate();

    const redirect = () => setTimeout(function() {navigate("/")}, 3000);

    useEffect(() => {
        redirect()
    }, [])

    return (
        <>
            <h2>Thank you!</h2>
            <h4>Your review has been recieved and will be displayed on the website shortly.</h4>
            <span>
                If you are not redirected shortly, <a href="/index.html" style={{color:"blue"}}>click here </a> 
                to return to the home page.
            </span>
        </>
    )
}

export default ReviewConfirm