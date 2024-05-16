import React, { useContext, useState, useEffect } from 'react';
import {
  Image,
  FlatList,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Product from '../../Components/Product';
import { ThemeContext } from '../../contexts/ThemeContext';
import { styles } from './styles';
import {
  getProductList,
  getProductListBySupermarket,
} from '../../services/requests/users';

export default function CheapestProduct({ navigation }) {
  const [searchedProduct, setSearchedProduct] = useState('');
  const [productsList, setProductsList] = useState([]);
  const [executedSearch, setExecutedSearch] = useState(false);
  const { selectedTheme } = useContext(ThemeContext);
  const style = styles(selectedTheme);

  useEffect(async () => {
    const productList = await getProductList(searchedProduct, '');
    if (typeof productList !== 'undefined' && productList.length > 0) {
      setProductsList(productList);
    } else {
      setProductsList([]);
    }
  }, []);

  async function getCheapest(productName) {
    setExecutedSearch(true);
    const productList = await getProductList(productName);
    // console.log('PEGOU? ', productList);
    if (typeof productList !== 'undefined' && productList.length > 0) {
      setProductsList(productList);
    } else {
      setProductsList([]);
    }
  }

  async function setListBySupermarket(supermarketName) {
    const productList = await getProductListBySupermarket(supermarketName);
    setProductsList(productList);
  }

  return (
    <View style={style.containerHome}>
      <StatusBar />
      <View style={style.contentArea}>
        <Text style={style.contentText}>
          Qual produto você gostaria de pesquisar?
        </Text>
      </View>
      <View style={style.inputArea}>
        <View style={style.inputAndButtonDisplay}>
          <TextInput
            style={style.input}
            placeholder="Produto"
            placeholderTextColor="#999"
            autoCapitalize="none"
            value={searchedProduct}
            onChangeText={setSearchedProduct}
          />
          <View style={style.inputAndButtonSeparator} />
          <TouchableOpacity
            style={style.button}
            onPress={() => getCheapest(searchedProduct)}>
            <Text style={style.buttonText}>Buscar</Text>
          </TouchableOpacity>
        </View>
      </View>
      {productsList.length > 0 && (
        <FlatList
          style={style.productFlatlist}
          data={productsList.sort((a, b) => a.price >= b.price)}
          ItemSeparatorComponent={() => <View style={style.separatorLine} />}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Detalhes do Produto', item.code)
              }>
              <Product {...item} grocery={false} func={setListBySupermarket} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          ListFooterComponent={<View style={{ padding: 20 }} />}
        />
      )}
      {productsList.length === 0 && executedSearch && (
        <View style={style.emptyBackground}>
          <Image
            style={style.imageItemNotFound}
            source={require('../../images/item_not_found.jpg')}
          />
          <Text style={style.contentText}>Produto não encontrado!</Text>
        </View>
      )}
    </View>
  );
}
