import React from "react";
import { categories } from "../data";
import "./categories.styles.scss";
import { CategoryItem } from "./category-item";

export const Categories = () => {
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    );
};
