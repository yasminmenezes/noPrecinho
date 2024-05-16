import React, { useContext, useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../contexts/ThemeContext';
import { GroceryContext } from '../../contexts/GroceryContext';
import { styles } from './styles';

export default function Product(product) {
  const [quantity, setQuantity] = useState(
    product.quantity ? product.quantity : 0,
  );
  const { selectedTheme } = useContext(ThemeContext);
  const { addProduct, removeProduct } = useContext(GroceryContext);
  const style = styles(selectedTheme);
  const isGrocery = product.grocery;
  const isCart = product.cart;
  const setListBySupermarket = product.func;

  function addProductToGrocery() {
    console.log('1 - Add Product, quantity:', quantity);
    addProduct(product, quantity + 1);
    console.log('2 - Add Product, quantity:', quantity);
    setQuantity(quantity + 1);
    console.log('3 - Add Product, quantity:', quantity);
  }

  function removeProductFromGrocery() {
    setQuantity(quantity - 1);
    removeProduct(product);
  }

  async function filterBySupermarket() {
    console.log('Filter by supermakert: ', product.supermarketName);
    if (setListBySupermarket) {
      console.log('setListBySupermarket is recognized as a function?');
      console.log(typeof setListBySupermarket);
      setListBySupermarket(product.supermarketName);
    }
  }

  return (
    <View style={style.container}>
      {!isGrocery && !isCart && (
        <TouchableOpacity
          style={style.supermarketContainer}
          onPress={() => filterBySupermarket()}>
          <Image
            style={style.supermarketLogo}
            source={{
              uri: product.supermarketLogo,
            }}
          />
        </TouchableOpacity>
      )}
      <View style={style.productInfoContainer}>
        <View style={style.prodImageSide}>
          <Image
            style={style.productImage}
            source={{
              uri: product.image,
            }}
          />
        </View>
        <View style={style.prodPriceSide}>
          <Text style={style.productDescription} numberOfLines={2}>
            {product.description}
          </Text>
          <View style={style.priceRowContainer}>
            {quantity === 0 && isGrocery && (
              <TouchableOpacity
                style={style.addButton}
                onPress={() => addProductToGrocery()}>
                <Text style={style.addButtonText}>Adicionar</Text>
              </TouchableOpacity>
            )}
            {quantity > 0 && (isGrocery || isCart) && (
              <View style={style.quantityContainer}>
                {!isCart && (
                  <TouchableOpacity
                    style={style.quantityButtonMinus}
                    onPress={() => removeProductFromGrocery()}>
                    <Text style={style.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                )}
                {isCart && <Text style={style.quantityText}>x {quantity}</Text>}
                {!isCart && <Text style={style.quantityText}>{quantity}</Text>}
                {!isCart && (
                  <TouchableOpacity
                    style={style.quantityButtonPlus}
                    onPress={() => addProductToGrocery()}>
                    <Text style={style.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                )}
              </View>
            )}
            {!isGrocery && (
              <Text style={style.formattedPrice}>
                R$:{' '}
                {(quantity ? product.price * quantity : product.price).toFixed(
                  2,
                )}
              </Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
