import React from "react";
import { Outlet } from "react-router-dom";
import { Categories } from "../../Components/Categories/Categories";

export const Home = () => {
    return (
        <div className="homeContainer">
            <Categories />
            <Outlet />
        </div>
    );
}; 
