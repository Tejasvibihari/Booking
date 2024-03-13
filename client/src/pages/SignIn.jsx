import VerticalSlider from "../components/ui/VerticalSlider";
import SignUpForm from "../components/SignUpForm";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import SignInForm from "../components/SignInForm";
import { Link } from "react-router-dom";


export default function SignUp() {
    const [haveAccount, setHaveAccount] = useState(true);

    function handleClick() {
        setHaveAccount(!haveAccount);
    }

    return (
        <>
            <div className="bg-slate-200 overflow-hidden h-screen">
                <div className="grid grid-cols-4 gap-4 max-w-7xl mx-auto">
                    <div className="max-w-60 -rotate-12">
                        <VerticalSlider />
                    </div>
                    <div className="max-w-60 -rotate-12">
                        <VerticalSlider
                            rtl="true" />
                        <Divider orientation="vertical" flexItem />
                    </div>

                    <div className="flex flex-col items-center justify-center col-span-2">
                        {haveAccount ? <SignInForm /> : <SignUpForm />}
                        <div className="flex flex-col justify-center items-center">
                            <button onClick={handleClick} className="text-sm">
                                {haveAccount ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                            </button>
                            <Link to="/adminsignin">
                                <button className="text-sm">
                                    Seller Login
                                </button>
                            </Link>
                        </div>
                    </div >
                </div >
            </div>
        </>
    )
}
