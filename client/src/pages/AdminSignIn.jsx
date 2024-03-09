
import AdminSignUpForm from '../components/AdminSignUpForm'
import AdminSignInForm from '../components/AdminSignInForm'
import { useState } from 'react'



export default function AdminSignIn() {
    const [haveAccount, setHaveAccount] = useState(true);
    function handleClick() {
        setHaveAccount(!haveAccount);
    }
    return (
        <>
            <div className='flex flex-col justify-center mt-24'>
                {haveAccount ? <AdminSignInForm /> : <AdminSignUpForm />}
                <div className="flex flex-col justify-center items-center">
                    <button onClick={handleClick} className="text-sm">
                        {haveAccount ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                    </button>
                </div>
            </div>
        </>
    )
}
