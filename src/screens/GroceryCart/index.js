import React, { useContext, useState, useEffect } from 'react';
import { Image, FlatList, Text, TouchableOpacity, View } from 'react-native';
import Product from '../../Components/Product';
import { ThemeContext } from '../../contexts/ThemeContext';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { GroceryContext } from '../../contexts/GroceryContext';
import { styles } from './styles';
import {
  getProductListBySupermarket,
  getUserGroceryList,
  clearCart,
} from '../../services/requests/users';

export default function GroceryCart({ navigation }) {
  const [totalValue, setTotalValue] = useState(0.0);
  const { user } = useContext(AuthenticationContext);
  const [supermarketLogo, setSupermarketLogo] = useState('');
  const [finalGroceryCart, setFinalGroceryCart] = useState([]);
  const { supermarkets } = useContext(GroceryContext);
  const { selectedTheme } = useContext(ThemeContext);
  const style = styles(selectedTheme);

  useEffect(async () => {
    const userGrocery = await getUserGroceryList(user.username);

    console.log('\nEntrou no Grocery Cart\nuserGrocery:', userGrocery);
    if (userGrocery.length > 0) {
      console.log('userGrocery > 0');

      let count = 0;
      let groceryTotal = 999999;
      let bestMarketId = -1;

      for (let n = 0; n < supermarkets.length; n = n + 1) {
        const supTotal = await getGroceryAtSupermarket(
          supermarkets[n],
          userGrocery,
        );
        console.log('IAI supTotal:', supTotal.total);
        if (supTotal.total < groceryTotal) {
          console.log('IAI groceryTotal:', groceryTotal);
          groceryTotal = supTotal.total;
          bestMarketId = count;
        }
        count = count + 1;
        console.log('count:', count);
      }

      const finalGrocery = await getGroceryAtSupermarket(
        supermarkets[bestMarketId],
        userGrocery,
      );
      console.log('\n======= FINAL GROCERY:', finalGrocery);
      setFinalGroceryCart(finalGrocery.grocery);
      setTotalValue(finalGrocery.total);
      setSupermarketLogo(finalGrocery.grocery[0].supermarketLogo);
    }
  }, []);

  async function getGroceryAtSupermarket(supermarketName, userGrocery) {
    console.log('getGroceryAtSupermarket ', supermarketName);
    const supermarketCart = [];
    let total = 0;
    const list = await getProductListBySupermarket(supermarketName);
    for (let i = 0; i < userGrocery.length; i = i + 1) {
      console.log('groceryList.length: ', userGrocery.length);
      console.log('list.length: ', list.length);
      for (let j = 0; j < list.length; j = j + 1) {
        console.log('getGroceryAtSupermarket indexes: ', i, j);
        if (userGrocery[i].code === list[j].code) {
          console.log('achou code', list[j].code);
          const prodToBeAdded = list[j];
          prodToBeAdded.quantity = userGrocery[i].quantity;
          supermarketCart.push(list[j]);
          total = total + prodToBeAdded.price * prodToBeAdded.quantity;
          break;
        }
      }
    }
    console.log('supermarketCart: ', supermarketCart);
    console.log('total?', total);

    const result = {
      supermarketName: supermarketName,
      grocery: supermarketCart,
      total: total,
    };
    console.log('RESULT:', result);
    return result;
  }

  function clearGroceryCart() {
    clearCart(user);
    user.carrinho = [];
    navigation.navigate('Home');
  }

  return (
    <View style={style.containerHome}>
      <View style={style.headerContainer}>
        <Text style={style.contentText}>
          <Text>Sua feira sai</Text>
          <Text style={{ fontWeight: 'bold' }}> NO PRECINHO</Text>
          <Text> no:</Text>
        </Text>
        {supermarketLogo !== '' && (
          <Image
            style={style.supermarketLogo}
            source={{
              uri: `${supermarketLogo}`,
            }}
          />
        )}
      </View>

      <View style={style.contentArea}>
        <Text style={style.contentText}>
          Confira abaixo a lista dos produtos:
        </Text>
      </View>

      <View style={style.bodyContainer}>
        <FlatList
          style={style.productFlatlist}
          data={finalGroceryCart}
          ItemSeparatorComponent={() => <View style={style.separatorLine} />}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Detalhes do Produto', item.code)
              }>
              <Product {...item} grocery={false} cart={true} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          ListFooterComponent={<View style={{ padding: 20 }} />}
        />
      </View>

      <View style={style.bottomContainer}>
        {totalValue > 0 && (
          <Text style={style.totalPrice}>
            Total R$: {totalValue.toFixed(2)}
          </Text>
        )}
        <TouchableOpacity
          onPress={() => clearGroceryCart()}
          style={style.footerContainer}>
          <Text style={style.groceryButtonText}>Limpar Carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
