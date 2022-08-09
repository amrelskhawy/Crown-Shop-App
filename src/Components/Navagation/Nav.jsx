import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/imgs/crown.svg";

export const Nav = () => {
    return (
        <Fragment>
            <nav className ="navigation">
                <Link className="nav-link" to="/">
                    <div className="logo-container">
                        <Logo className="logo" />
                    </div>
                </Link>

                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    <Link className="nav-link" to="/auth">
                        SIGN IN
                    </Link>

                </div>
            </nav>

            <Outlet />
        </Fragment>
    );
};
