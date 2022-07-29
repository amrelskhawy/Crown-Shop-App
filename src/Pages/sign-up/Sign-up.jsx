import React, { useState } from "react";
import "./Sign-up.scss";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase.utils";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};
const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);

    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleSubmit = async (event) => {
        event.preventDefault()

        if ( password !== confirmPassword ) {
            alert('Passwords Not Matched !!')
            return ;
        }

        try {
            const response = await createAuthUserWithEmailAndPassword(
                email ,
                password
            )
            console.log(response);
        } catch (err) {
            console.log('Error Creating this user because ' , err);
        }
    };

    return (
        <div>
            <form className={"signUp"} onSubmit={handleSubmit}>
                <label htmlFor="">Display Name</label>
                <input
                    name={"displayName"}
                    type="text"
                    value={displayName}
                    required
                    onChange={handleChange}
                />

                <label htmlFor="">Email</label>
                <input
                    name={"email"}
                    type="email"
                    value={email}
                    required
                    onChange={handleChange}
                />

                <label htmlFor="">Password</label>
                <input
                    name={"password"}
                    type="password"
                    value={password}
                    required
                    onChange={handleChange}
                />

                <label htmlFor="">Confirm Password</label>
                <input
                    name={"confirmPassword"}
                    type="password"
                    value={confirmPassword}
                    required
                    onChange={handleChange}
                />
                <div className="newDiv">
                    <span>OR</span>
                    <button type={"submit"}>Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
