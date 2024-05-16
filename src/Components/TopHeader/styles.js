import { StyleSheet } from 'react-native';

export const styles = theme => {
  return StyleSheet.create({
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
      marginTop: 20,
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
  });
};
