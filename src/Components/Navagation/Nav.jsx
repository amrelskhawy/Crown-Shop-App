import React, { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/imgs/crown.svg";
import CartDropdown from "../cart-dropdown/cart-dropdown"
import { UserContext } from "../../context/user.context";
import CartIcon from "../cart-icon/cart-icon";
import { CartContext } from "../../context/cart-context";

export const Nav = () => {
    const { currentUser } = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)
    

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
                            <span className="nav-link" onClick={''}>
                                SIGN OUT
                            </span>
                        ) : (
                            <Link className="nav-link" to="/auth">
                                SIGN IN
                            </Link>
                        )
                    }
                    <CartIcon  />
                </div>
                {isCartOpen && <CartDropdown />}
                </nav>

            <Outlet />
        </Fragment>
    );
};
