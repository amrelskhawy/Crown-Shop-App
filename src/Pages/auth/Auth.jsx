import { useState } from "react";
import {
    auth,
    SignInWithGooglePopup,
    createUserDocumentFromAuth,
    signAuthWithEmailAndPassword
} from "../../utils/firebase.utils";
import SignUp from "../sign-up/Sign-up";
import './auth.scss'
import { Button } from '../../Components/button-component/button-component'
import SignIn from "../sign-in/Sign-in";
import { InputField } from "../../Components/input-component/input.component";

const defaultFormFields = {
    email: "",
    password: "",
};


const Auth = () => {
    const logGoogleUser = async () => {
        const { user } = await SignInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };


    return (
        <div className={"forms container"}>
            <SignIn googleFunc={logGoogleUser} signInFunc={signAuthWithEmailAndPassword} />
            <br />
            <SignUp />
        </div>
    );
};

export default Auth;
