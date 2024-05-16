import { StyleSheet } from 'react-native';

export const styles = theme => {
  return StyleSheet.create({
    containerHome: {
      flex: 1,
      backgroundColor: theme.background,
    },
    headerContainer: {
      flex: 1.3,
    },
    contentArea: {
      padding: 20,
      fontSize: 18,
      alignItems: 'center',
      backgroundColor: theme.headerColor,
      marginBottom: 20,
    },
    contentText: {
      fontSize: 18,
      color: theme.black,
    },
    inputAndButtonDisplay: {
      flexDirection: 'row',
    },
    inputAndButtonSeparator: {
      width: '2%',
    },
    inputArea: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    input: {
      height: 40,
      width: '68%',
      backgroundColor: theme.input,
      marginBottom: 15,
      padding: 10,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: theme.black,
      color: theme.black,
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
    bodyContainer: {
      flex: 4.5,
    },
    productFlatlist: {
      width: '100%',
      backgroundColor: theme.listBackground,
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
    iconArea: {
      marginLeft: 32,
    },
    bottomContainer: {
      flex: 1.1,
      backgroundColor: theme.listBackground,
    },
    footerContainer: {
      alignSelf: 'center',
      alignItems: 'center',
      width: '65%',
      padding: 10,
      marginVertical: 30,
      borderRadius: 22,
      borderWidth: 2,
      borderColor: theme.black,
    },
    groceryButtonText: {
      fontSize: 18,
      color: theme.black,
    },
    list: {
      width: '100%',
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
