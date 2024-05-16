import { StyleSheet } from 'react-native';

export const styles = theme => {
  return StyleSheet.create({
    containerHome: {
      flex: 1,
      backgroundColor: theme.background,
    },
    headerArea: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: theme.headerColor,
    },
    title: {
      fontSize: 22,
      lineHeight: 42,
      fontWeight: 'bold',
      color: theme.title,
    },
    contentArea: {
      padding: 20,
      fontSize: 18,
      alignItems: 'center',
      backgroundColor: theme.headerColor,
      marginBottom: 20,
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
    productFlatlist: {
      width: '100%',
      backgroundColor: theme.listBackground,
    },
    emptyBackground: {
      paddingTop: 100,
      height: '100%',
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
    iconArea: {
      marginLeft: 32,
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
      borderWidth: 1,
      borderColor: theme.black,
      color: theme.black,
    },
    list: {
      flex: 1,
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
