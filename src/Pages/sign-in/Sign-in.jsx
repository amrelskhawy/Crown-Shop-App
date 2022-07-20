import React from 'react';
import { SignInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase.utils'

const SignIn = () => {

    const logGoogleUser = async () => {
        const response = await SignInWithGooglePopup()
        const {user} = response
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return (
        <div>
            <div>
                Sign In

            </div>
            <button onClick={logGoogleUser} >
                Sign In With Google
            </button>
        </div>
    );
};

export default SignIn;
