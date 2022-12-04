import React, { Fragment, useContext,useState } from "react";
import { Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/imgs/crown.svg";
import { signOutUser } from "../../utils/firebase.utils";
import CartDropdown from "../cart-dropdown/cart-dropdown"
import { UserContext } from "../../context/user.context";
import CartIcon from "../cart-icon/cart-icon";

export const Nav = () => {
    const { currentUser } = useContext(UserContext)
    
    const [isHidden, setIsHidden] =  useState(true)

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
                            <span className="nav-link" onClick={signOutUser}>
                                SIGN OUT
                            </span>
                        ) : (
                            <Link className="nav-link" to="/auth">
                                SIGN IN
                            </Link>
                        )
                    }
                    <CartIcon onClick={() => setIsHidden(!isHidden)} />
                </div>
                <CartDropdown isHidden={isHidden} />
                </nav>

            <Outlet />
        </Fragment>
    );
};
