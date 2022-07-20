import React from "react";
import { Outlet } from "react-router-dom";

export const Footer = () => {
    return (
        <div>
            <Outlet />
            <footer>
                Footer
            </footer>
        </div>
    );
};
