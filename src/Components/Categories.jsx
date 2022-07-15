import React from "react";
import { categories } from "../data";
import './categories.styles.scss'

export const Categories = () => {
    return <div className="categories-container">
            {categories.map(({ title, id, img }) => (
                <div key={id} className="category-container">
                    <div className="background-image" />
                    <div className="category-body-container">
                        <h2>{title}</h2>
                        <p>Shop Now</p>
                    </div>
                </div>
            ))}
        </div>;
};
