import React, { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/imgs/crown.svg";
import { signOutUser } from "../../utils/firebase.utils";

import { UserContext } from "../../context/user.context";

export const Nav = () => {
    const { currentUser , setCurrentUser} = useContext(UserContext)
    const signOutHandler = async () => {
        await signOutUser()
        setCurrentUser(null)
    }

    return (
        <Fragment>
            <nav className="navigation">
                <Link className="nav-link" to="/">
                    <div className="logo-container">
                        <Logo className="logo" />
                    </div>
                </Link>

                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    {
                        currentUser ? (

                            <span className="nav-link" onClick={signOutHandler}>
                                SIGN OUT
                            </span>
                        ) : (
                            <Link className="nav-link" to="/auth">
                                SIGN IN
                            </Link>
                        )
                    }

                </div>
            </nav>

            <Outlet />
        </Fragment>
    );
};
