import React from "react";
import "./category-item.scss";

export const CategoryItem = ({ category }) => {
    const { id, imageUrl, title} = category;
    return (
            <div key={id} className="category-container">
                <div
                    className="background-image"
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                        backgroundPosition: "top",
                    }}
                />
                <div className="category-body-container">
                    <h2>{title}</h2>
                    <p>Shop Now</p>
                </div>
            </div>
    );
};