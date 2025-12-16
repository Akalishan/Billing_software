import React from "react";
import { Category } from "./Category";
import { assets } from "../assets/assets";

export const DisplayCategory = ({
  selectedCategory,
  setSelectedCategory,
  categories,
}) => {
  return (
    <div className="flex gap-3 w-full m-0">
      <div className="columns-md-3 col-sm-6 p-0  " key="all">
        <Category
          categoryName="All items"
          imgUrl={assets.device}
          numberOfItems={categories.reduce((acc, cat) => acc + cat.items, 0)}
          bgColor="#63757d"
          isSelected={selectedCategory === ""}
          onClick={() => setSelectedCategory("")}
        />
      </div>
      {categories.map((category) => (
        <div className="columns-md-3 col-sm-6 p-0  " key={category.categoryId}>
          <Category
            categoryName={category.name}
            imgUrl={category.imgUrl}
            numberOfItems={category.items}
            bgColor={category.bgColor}
            isSelected={selectedCategory === category.categoryId}
            onClick={() => setSelectedCategory(category.categoryId)}
          />
        </div>
      ))}
    </div>
  );
};
