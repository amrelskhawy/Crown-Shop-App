import React, { useState  } from "react";
import { 
    SignInWithGooglePopup,
    createUserDocumentFromAuth,
    signAuthWithEmailAndPassword
} from "../../utils/firebase.utils";

import { InputField } from "../../Components/input-component/input.component";
import { Button } from "../../Components/button-component/button-component";
import "./Sign-in.scss";

// The Default Data
const defaultFormFields = {
    email: "",
    password: "",
};

// The Sign Up Form
const SignIn = ({ signInFunc }) => {

    const [formFields, setFormFields] = useState(defaultFormFields);

    const { email, password } = formFields;

    const logGoogleUser = async () => {
        const { user } = await SignInWithGooglePopup();
        // setCurrentUser(user)
        await createUserDocumentFromAuth(user);
    };

    // To Handle Changes and set a new data
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const resetDefault = () => setFormFields(defaultFormFields)

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()

            const {user} = await signAuthWithEmailAndPassword(email, password)
            // setCurrentUser(user)
            resetDefault()

        } catch (err) {
            switch (err.code) {
                case 'auth/wrong-password':
                    alert('Bad Credentials !!')
                    break;

                case 'auth/user-not-found':
                    alert('This email not in our database ! try to sign up ')
                    break;
            
                default:
                    break;
            }
        }
    }
    return (
        <div>
            <h2>I already have an Account</h2>
            <span>Sign in with your email and password</span>
            <form className="signIn" 
                onSubmit={handleSubmit}>
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
                    <Button type="submit">
                        Sign In
                    </Button>

                    <Button
                        button_type={'google'}
                        onClick={logGoogleUser}
                        type="button"
                    >
                        Sign In With Google
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
