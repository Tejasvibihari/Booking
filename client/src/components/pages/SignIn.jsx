import VerticalSlider from "../ui/VerticalSlider";
import SignUpForm from "../SignUpForm";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import SignInForm from "../SignInForm";


export default function SignUp() {
    const [haveAccount, setHaveAccount] = useState(true);

    function handleClick() {
        setHaveAccount(!haveAccount);
    }

    return (
        <>
            <div className="bg-slate-200">
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
                        </div>
                    </div >
                </div >
            </div>
        </>
    )
}
