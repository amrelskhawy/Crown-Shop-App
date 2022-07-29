import { useState } from "react";
import {
    auth,
    SignInWithGooglePopup,
    createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import SignUp from "../sign-up/Sign-up";
import './Sign-in.scss'


const containerStyles = {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    width: '100%'
}




const SignInElements = () => {
    
    const defaultFormFields = {
        email: "",
        password: "",
    };

    const [formFields, setFormFields] = useState(defaultFormFields);

    const { email, password } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validation
        

        // createUserWithEmailAndPassword(email,password)
    };

    return (
        <div>
            <form className="signIn" action="">
                <label>Email</label>
                <input type="email" name="signin-email" id="signin-email" 
                value={email}
                />
                <label>Password</label>

                <input
                    type="password"
                    name="signin-password"
                    id="signin-password"
                    value={password}
                />
                <button type="submit">Sign In</button>
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
        <div className={"forms"} style={containerStyles}>
            {/*<SignInElements />*/}
            <br />
            <div>
                <SignUp />
            </div>
        </div>
    );
};

export default SignIn;
