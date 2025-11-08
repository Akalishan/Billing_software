import React from 'react'
import { Category } from './Category'

export const DisplayCategory = ({selectedCategory,setSelectedCategory,categories}) => {
  return (
    <div className="flex gap-3 w-full m-0" >
        {categories.map(category=>(
            <div className="columns-md-3 col-sm-6 p-0  " key={category.categoryId}>
                <Category
                categoryName={category.name}
                imgUrl={category.imgUrl}
                numberOfItems={category.items}
                bgColor={category.bgColor}
                isSelected={selectedCategory===category.categoryId} 
                onClick={()=>setSelectedCategory(category.categoryId)}
                />

            </div>
        ))}
    </div>
  )
}
