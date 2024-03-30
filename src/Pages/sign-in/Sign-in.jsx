import React, {useEffect, useState} from "react";

import { InputField } from "../../Components/input-component/input.component";
import { Button } from "../../Components/button-component/button-component";

import "./Sign-in.scss";
import {
  auth,
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect
} from "../../utils/firebase.utils";

import { getRedirectResult } from "firebase/auth"


// The Default Data
const defaultFormFields = {
    email: "",
    password: "",
};

// The SignUp Form
const SignIn = ({ signInFunc }) => {


    const [formFields, setFormFields] = useState(defaultFormFields);

    const { email, password } = formFields;

    const logGoogleUser = async () => {
        try {
           const {user}  = await signInWithGooglePopUp();
           const userDocRef = await createUserDocumentFromAuth(user)
          // console.log(auth)
        } catch (error) {
            switch (error.code) {
                // If the User mail is Disabled
                case 'auth/user-disabled':
                    alert('This email is Disabled Right Now, Back To Adminstrator ')
                    break;
            
                default:
                    break;
            }

        }
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

            
            resetDefault()

        } catch (err) {
            switch (err.code) {
                // If the Passeword is wrong
                case 'auth/wrong-password':
                    alert('Bad Credentials !!')
                    break;

                // If the User is not Exist
                case 'auth/user-not-found':
                    alert('This email not in our database ! try to sign up ')
                    break;
                    

                default:
                    e.preventDefault()
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
                    <Button type="submit"
                    style={{
                        flex: 1,
                    }}
                    >
                        Sign In
                    </Button>

                    <Button
                        button_type={'google'}
                        onClick={logGoogleUser}
                        type="button"
                        style={{
                            flex: 2,
                        }}
                    >
                        Sign In With Google
                    </Button>

                </div>
            </form>
        </div>
    );
};

export default SignIn;
