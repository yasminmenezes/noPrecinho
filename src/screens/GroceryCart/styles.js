import { StyleSheet } from 'react-native';

export const styles = theme => {
  return StyleSheet.create({
    containerHome: {
      flex: 1,
      backgroundColor: theme.headerColor,
    },
    headerContainer: {
      flex: 0.8,
      width: '100%',
      alignItems: 'center',
      padding: 20,
      backgroundColor: theme.headerColor,
    },
    supermarketLogo: {
      marginTop: 10,
      width: 200,
      height: 50,
      resizeMode: 'contain',
    },
    contentArea: {
      padding: 20,
      fontSize: 18,
      alignItems: 'center',
      backgroundColor: theme.subBackground,
    },
    button: {
      height: 40,
      width: '20%',
      backgroundColor: theme.button,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: theme.black,
    },
    contentText: {
      fontSize: 18,
      color: theme.black,
    },
    bodyContainer: {
      flex: 5,
    },
    productFlatlist: {
      width: '100%',
      backgroundColor: theme.listBackground,
    },
    emptyBackground: {
      paddingTop: 60,
      height: '80%',
      width: '100%',
      backgroundColor: theme.listBackground,
      alignItems: 'center',
    },
    imageItemNotFound: {
      width: 200,
      height: 200,
      borderRadius: 10,
      marginBottom: 20,
    },
    iconsArea: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    icon: {
      fontSize: 24,
      lineHeight: 42,
      fontWeight: 'bold',
      color: theme.text,
    },
    bottomContainer: {
      flex: 1.5,
      backgroundColor: theme.listBackground,
      alignItems: 'center',
    },
    footerContainer: {
      alignSelf: 'center',
      alignItems: 'center',
      width: '65%',
      padding: 10,
      marginVertical: 10,
      borderRadius: 22,
      borderWidth: 2,
      borderColor: theme.black,
    },
    groceryButtonText: {
      fontSize: 18,
      color: theme.black,
    },
    totalPrice: {
      paddingTop: 10,
      fontSize: 30,
      fontWeight: 'bold',
      color: theme.black,
    },
    separatorLine: {
      // alignSelf: 'center',
      // width: '80%',
      width: '100%',
      marginTop: 14,
      backgroundColor: '#c2c2c2',
      height: 1,
    },
  });
};
