import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm( {categoryState, setCategoryState, nameState, setNameState, onItemFormSubmit} ) {
  return (
    <form onSubmit={(e) => onItemFormSubmit(e)} className="NewItem">
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={nameState}
          onChange={(e) => setNameState(e.target.value)}
          />
      </label>

      <label>
        Category:
        <select 
          name="category"
          value={categoryState}
          onChange={(e) => setCategoryState(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
