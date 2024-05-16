import React, { useContext, useEffect, useState } from 'react';
import {
  Image,
  Linking,
  Platform,
  StatusBar,
  Text,
  // TouchableOpacity,
  View,
} from 'react-native';
import { ThemeContext } from '../../contexts/ThemeContext';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { styles } from './styles';
import { getCheapestProductByCode } from '../../services/requests/users';

export default function ProductDetails({ route }) {
  const productFull = route.params;
  const [product, setProduct] = useState({});
  const { user } = useContext(AuthenticationContext);
  const { selectedTheme } = useContext(ThemeContext);
  const style = styles(selectedTheme);

  useEffect(async () => {
    console.log('product Details');
    if (typeof productFull === 'string') {
      const prod = await getCheapestProductByCode(productFull);
      setProduct(prod);
    } else {
      setProduct(productFull);
    }
  }, []);

  console.log('DETALHES produto:', product);

  function openMapsWithAddress(address) {
    if (Platform.OS === 'android') {
      console.log('ANDROID maps!', address);
      Linking.openURL(`google.navigation:q=${address}`);
    } else {
      console.log('iOS maps!', address);
      Linking.openURL(`maps://app?saddr=${user.cep}&daddr=${address}`);
    }
  }

  return (
    <View style={style.containerHome}>
      <StatusBar />
      {product !== undefined && <Text style={style.title}>{product.name}</Text>}
      {product !== undefined && product.address && (
        <Text style={style.title}>{product.price.toFixed(2)} R$</Text>
      )}
      {product !== undefined && (
        <View style={style.imageContainer}>
          <Image
            style={style.productImage}
            source={{
              uri: product.image,
            }}
          />
        </View>
      )}

      {product !== undefined && (
        <Text style={style.description}>{product.description}</Text>
      )}
      {product !== undefined && product.code && (
        <View style={style.innerDescriptionView}>
          <Text style={style.innerDescriptionText}>
            O melhor preço deste produto no momento é R$
            {product.price.toFixed(2)}
            {'\n'} no supermercado: {product.supermarketName}
          </Text>
          <Image
            style={style.supermarketLogo}
            source={{
              uri: product.supermarketLogo,
            }}
          />
        </View>
      )}
      {product !== undefined && product.address && (
        <Text
          style={style.addressDescription}
          onPress={() => {
            openMapsWithAddress(product.address);
          }}>
          Endereço: {product.address} R$
        </Text>
      )}
      {/* {isGrocery && (
        <TouchableOpacity
          style={style.addButton}
          onPress={() => console.log('Adicionou ao Carrinho')}>
          <Text style={style.addButtonText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      )} */}
    </View>
  );
}
