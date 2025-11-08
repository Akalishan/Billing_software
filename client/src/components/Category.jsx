import React from "react";

export const Category = ({
  categoryName,
  imgUrl,
  numberOfItems,
  bgColor,
  isSelected,
  OnClick,
}) => {
  return (
    <div
      className="flex items-center p-3 rounded gap-1 relative `${bg-color-bgColor}` cursor-pointer"
      onClick={OnClick}
    >
      <div className="relative mr-[15px]">
        <img src={imgUrl} alt={categoryName} />
      </div>
      <div>
        <h6 className="text-white mb-0">{categoryName}</h6>
        <p className="text-white mb-0">{numberOfItems} Items</p>
      </div>
      {isSelected && <div className=""></div> }
    </div>
  );
};
