import { useState } from "react";
import {
    auth,
    SignInWithGooglePopup,
    createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import SignUp from "../sign-up/Sign-up";
import './Sign-in.scss'

import { InputField } from "../../Components/input-component/input.component";

const defaultFormFields = {
    email: "",
    password: "",
};


const SignInElements = ({ logFunc }) => {

    const [formFields, setFormFields] = useState(defaultFormFields);

    const { email, password } = formFields;

    // To Handle Changes and set a new data
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();

    };

    return (
        <div>
            <h2>I already have an Account</h2>
            <span>Sign in with your email and password</span>
            <form className="signIn" action="">
                <InputField 
                    label={'Email'}
                    type="email" 
                    name="email" 
                    id="email"
                    value={email}
                    onChange={handleChange}
                    required
                />

                <InputField 
                    label={'Password'}
                    type="password"
                    name="password"
                    id="password"
                    value={password} 
                    onChange={handleChange}
                    required
                />


                <div className="buttons">
                    <button type="submit">Sign In</button>
                    <button
                        class="btn-google"
                        onClick={logFunc}
                    >
                        Sign In With Google</button>
                </div>
            </form>
        </div>
    );
};

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await SignInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div className={"forms container"}>
            <SignInElements logFunc={logGoogleUser} />
            <br />
            <div>
                <SignUp />
            </div>
        </div>
    );
};

export default SignIn;
