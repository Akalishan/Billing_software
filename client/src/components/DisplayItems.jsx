import React, { useContext, useState } from "react";
import { Item } from "./Item";
import { SearchBox } from "./SearchBox";

export const DisplayItems = ({ selectedCategory }) => {
  const { itemsData } = useContext(AppContext);
  const [searchText, setSearchText] = useState("");
  const filteredItems = itemsData
    .filter((item) => {
      if (!selectedCategory) return true;
      return item.categoryId === selectedCategory;
    })
    .filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    ); 
  return (
    <div className="p-3">
      <div className="flex justify-between items-center ">
        <div></div>
        <div>
          <SearchBox onSearch={setSearchText} />
        </div>
      </div>
      <div className="row-auto gap-3 ">
        {filteredItems.map((item, index) => (
          <div className="col-auto" key={index}>
            <Item
              itemName={item.name}
              itemPrice={item.price}
              itemImage={item.imgUrl}
              itemId={item.itemId}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
