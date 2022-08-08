import React, { useState } from "react";
import "./Sign-up.scss";
import { createAuthUserWithEmailAndPassword
, createUserDocumentFromAuth } from "../../utils/firebase.utils";
import { InputField } from "../../Components/input-component/input.component";


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
            console.log(user);
        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                alert('Cannot Create Account, Email is Already Used !!')
            }
            console.log("Error Creating this user because ", err);
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
                />

                <InputField
                    label={'Email'} 
                    name={"email"}
                    type="email"
                    value={email}
                    onChange={handleChange}
                />

                <InputField
                    label={'Password'} 
                    name={"password"}
                    type="password"
                    value={password}
                    required
                    onChange={handleChange}
                />

                <InputField
                    label={'Confirm Password'} 
                    name={"confirmPassword"}
                    type="password"
                    value={confirmPassword}
                    required
                    onChange={handleChange}
                />

                <button type={"submit"}>Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
