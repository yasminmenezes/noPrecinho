import { StyleSheet } from 'react-native';

export const styles = theme => {
  return StyleSheet.create({
    containerHome: {
      flex: 1,
      backgroundColor: theme.headerColor,
      alignItems: 'center',
      padding: 10,
    },
    title: {
      width: '100%',
      textAlign: 'center',
      fontSize: 22,
      lineHeight: 42,
      fontWeight: 'bold',
      color: theme.title,
    },
    imageContainer: {
      alignItems: 'center',
      backgroundColor: theme.subBackground,
      padding: 20,
      margin: 20,
    },
    productImage: {
      width: 200,
      height: 200,
      resizeMode: 'cover',
    },
    description: {
      width: '80%',
      textAlign: 'center',
      fontSize: 18,
      lineHeight: 22,
      color: theme.black,
    },
    addressDescription: {
      width: '80%',
      marginTop: 20,
      textAlign: 'center',
      fontSize: 18,
      lineHeight: 22,
      color: theme.black,
    },
    innerDescriptionView: {
      backgroundColor: theme.subBackground,
      marginVertical: 50,
      padding: 12,
      width: '80%',
      alignItems: 'center',
    },
    innerDescriptionText: {
      fontSize: 20,
      textAlign: 'center',
      color: theme.black,
    },
    supermarketLogo: {
      marginTop: 20,
      width: 200,
      height: 50,
      resizeMode: 'contain',
    },
    addButton: {
      paddingVertical: 10,
      paddingHorizontal: 14,
      marginTop: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: theme.black,
      backgroundColor: theme.button,
    },
    addButtonText: {
      fontSize: 18,
      color: theme.black,
    },
  });
};
