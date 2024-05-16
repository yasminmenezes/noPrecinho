import React, { useContext } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../contexts/ThemeContext';
import { styles } from './styles';

export default function Fuel(fuel) {
  const { selectedTheme } = useContext(ThemeContext);
  const style = styles(selectedTheme);

  console.log('FUEL!?', fuel);

  return (
    <View style={style.container}>
      <View style={style.productInfoContainer}>
        <View style={style.prodImageSide}>
          <Image
            style={style.productImage}
            source={{
              uri: fuel.image,
            }}
          />
        </View>
        <View style={style.prodPriceSide}>
          <Text style={style.productTitle}>{fuel.title}</Text>
          <Text style={style.productDescription}>{fuel.bairro}</Text>
          <Text style={style.formattedPrice}>R$: {fuel.price.toFixed(2)}</Text>
          {/* <Text style={style.productDescription}>{fuel.address}</Text> */}
        </View>
      </View>
    </View>
  );
}
