import React, { useState } from "react";
import "./Sign-in.scss";
import { createAuthUserWithEmailAndPassword
, createUserDocumentFromAuth } from "../../utils/firebase.utils";
import { InputField } from "../../Components/input-component/input.component";
import { Button } from "../../Components/button-component/button-component";


// The Default Data
const defaultFormFields = {
    displayName: "",
    email: "",

};

// The Sign Up Form

const SignIn = ({ googleFunc , signInFunc }) => {

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

    const resetDefault = () => setFormFields(defaultFormFields)



    const handleSubmit = async () => {
        try {
            resetDefault()
        } catch (err) {

            if (err.code === 'auth/email-already-in-use') {
                alert('Cannot Create Account, Email is Already Used !!')
            }
            console.log("Error Creating this user because ", err);

        }
    }


    

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
                    <Button type="submit"
                    onClick={signInFunc}
                    >
                        Sign In
                    </Button>
                    <Button
                        button_type={'google'}
                        onClick={googleFunc}
                    >   Sign In With Google
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
