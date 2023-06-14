import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [categoryState, setCategoryState] = useState("Produce");
  const [nameState, setNameState] = useState("");

  // function to handle the form event, passed to itemForm as a prop

  function onItemFormSubmit(e){
    e.preventDefault();
    const newItem  = {
      name: nameState,
      category: categoryState,
      id: uuid(),
    }
    
    setItems([newItem, ...items]);
  }

  // callback passed to Filter as a prop searchbar change handler
  function  onSearchChange(newSearch){
    setSearch(newSearch)
    
  }
  console.log(search);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
      .filter(item => {
        if (selectedCategory === "All") {
          return true 
        } else { 
            return item.category === selectedCategory}
        })
        .filter(item => item.name.includes(search));

  return (
    <div className="ShoppingList">
      <ItemForm categoryState={categoryState} setCategoryState={setCategoryState} nameState={nameState} setNameState={setNameState} onItemFormSubmit={onItemFormSubmit}/>
      <Filter  search={search} setSearch={setSearch} onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
