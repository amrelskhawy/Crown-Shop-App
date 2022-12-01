import React, { useState } from "react";
import "./Sign-up.scss";
import { createAuthUserWithEmailAndPassword
, createUserDocumentFromAuth } from "../../utils/firebase.utils";
import { InputField } from "../../Components/input-component/input.component";
import { Button } from "../../Components/button-component/button-component";


// The Default Data
const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

// The Sign Up Form
const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);

    const { displayName, email, password, confirmPassword } = formFields;

    // To Handle Changes and set a new data
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    
    // Return All values to defaults
    const resetDefault = () => setFormFields(defaultFormFields)

    // To Send Data
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords Not Matched !!");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );
            await createUserDocumentFromAuth(user, { displayName })
            resetDefault()

        } catch (err) {
            switch (err.code) {
                case 'auth/weak-password':
                    alert('The Password Should be at least 6 Characters !!')
                    console.clear()
                    break;

                case 'auth/email-already-in-use':
                    alert('This Email is already Exists !!')
                    console.clear()
                    break;

                default:
                    console.log("Error Creating this user because ", err);
                    break;
            }


        }
    };

    return (
        <div>
            <h2>Don't Have an Account ?</h2>
            <span>Sign Up with your email and password</span>
            <form className={"signUp"} onSubmit={handleSubmit}>

                <InputField
                    label={'Display Name'} 
                    name={"displayName"}
                    type="text"
                    value={displayName}
                    onChange={handleChange}
                    required={true}
                />

                <InputField
                    label={'Email'} 
                    name={"email"}
                    type="email"
                    value={email}
                    onChange={handleChange}
                    required={true}
                />

                <InputField
                    label={'Password'} 
                    name={"password"}
                    type="password"
                    value={password}
                    onChange={handleChange}
                    required={true}
                />

                <InputField
                    label={'Confirm Password'} 
                    name={"confirmPassword"}
                    type="password"
                    value={confirmPassword}
                    required={true}
                    onChange={handleChange}
                />

                <Button type={"submit"}>Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUp;
