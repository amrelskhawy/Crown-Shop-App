import SignUp from "../sign-up/Sign-up";
import './auth.scss'
import SignIn from "../sign-in/Sign-in";

const Auth = () => {
    return (
        <div className={"forms container"}>
            <SignIn />
            <br />
            <SignUp />
        </div>
    );
};

export default Auth;
