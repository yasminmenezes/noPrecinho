import React, { createContext, useContext, useState } from 'react';

import { AuthenticationContext } from './AuthenticationContext';
import {
  addProductToUserGrocery,
  removeProductFromUserGrocery,
} from '../services/requests/users';

export const GroceryContext = createContext({});

export function GroceryProvider({ children }) {
  const { user } = useContext(AuthenticationContext);
  const [groceryList, setGroceryList] = useState([]);
  const supermarkets = [
    'Carrefour',
    'BeMais',
    'TodoDia',
    'Mercado Extra',
    'Mix Mateus',
  ];

  async function addProduct(product, quantity) {
    console.log(
      `GroceryContext.js \nquantity: ${quantity}\ngroceryList: ${groceryList}`,
    );
    const newProduct = {
      id: product.id,
      code: product.code,
      quantity: quantity,
    };

    await addProductToUserGrocery(user, newProduct);

    const currentList = groceryList;
    const prodIndex = groceryList.indexOf(product);
    if (prodIndex > -1) {
      currentList.splice(prodIndex, 1);
    }
    const newProductObj = product;
    newProductObj.quantity = quantity;
    currentList.push(newProductObj);
    setGroceryList(currentList);
    console.log('Product Added\ngroceryList: ', groceryList);
    console.log('Product Added\ncurrentList: ', currentList);
  }

  async function removeProduct(product) {
    console.log('Starting to Remove Product\ngroceryList: ', groceryList);

    await removeProductFromUserGrocery(user, product.id);

    const updatedList = groceryList;
    updatedList.pop(product);
    setGroceryList(updatedList);
  }

  return (
    <GroceryContext.Provider
      value={{
        groceryList,
        addProduct,
        removeProduct,
        supermarkets,
      }}>
      {children}
    </GroceryContext.Provider>
  );
}
