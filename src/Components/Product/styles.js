import { StyleSheet } from 'react-native';

export const styles = theme => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    supermarketContainer: {
      width: '80%',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      // flexDirection: 'row',
      marginTop: 10,
      paddingVertical: 4,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: theme.black,
    },
    supermarketLogo: {
      width: 200,
      height: 50,
      resizeMode: 'contain',
    },
    supermarketTitle: {
      marginLeft: 12,
      fontSize: 20,
      color: theme.black,
      fontWeight: 'bold',
    },
    productInfoContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 10,
    },
    prodImageSide: {
      width: '30%',
      alignItems: 'center',
    },
    productImage: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
    },
    prodPriceSide: {
      width: '70%',
      height: 100,
      justifyContent: 'space-between',
    },
    productDescription: {
      fontSize: 18,
      color: theme.black,
      marginBottom: 12,
      marginRight: 10,
    },
    priceRowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    addButton: {
      paddingVertical: 6,
      paddingHorizontal: 14,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: theme.black,
      alignSelf: 'flex-end',
      marginRight: 12,
    },
    addButtonText: {
      fontSize: 18,
      color: theme.black,
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    quantityButtonMinus: {
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: theme.black,
    },
    quantityButtonPlus: {
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: theme.black,
    },
    quantityButtonText: {
      color: theme.black,
      fontSize: 18,
      fontWeight: 'bold',
    },
    quantityText: {
      color: theme.black,
      fontSize: 18,
      fontWeight: 'bold',
      paddingHorizontal: 10,
    },
    formattedPrice: {
      lineHeight: 40,
      fontSize: 30,
      color: theme.black,
      textAlign: 'right',
      marginRight: 12,
    },
  });
};
