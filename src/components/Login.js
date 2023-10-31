import { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from "../utils/validate";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMassage, setErrorMassage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);

    const HandleButtonClick = () => {
        // Validate the form data
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMassage(message);

        // sign / sign up
    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
    return (
        <div><Header />
            <div className='absolute '>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="Logo" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">

                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && (
                    <input type="text" placeholder="Full Name" className="p-2 my-2 w-full rounded-lg bg-gray-700" />
                )}

                <input ref={email} type="text" placeholder="Email Address" className="p-2 my-2 w-full rounded-lg bg-gray-700" />

                <input ref={password} type="password" placeholder="Password" className="p-2 my-2 w-full bg-gray-700 rounded-lg" />

                <p className='text-red-500 font-bold text-lg'>{errorMassage}</p>

                <button className="p-4 my-6 bg-red-700 w-full rounded-lg " onClick={HandleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>

                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up" : "Already registered? Sign In Now"} </p>
            </form>
        </div>
    )
}

export default Login 