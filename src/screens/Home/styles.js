import { StyleSheet } from 'react-native';

export const styles = theme => {
  return StyleSheet.create({
    containerHome: {
      flex: 1,
      backgroundColor: theme.background,
    },
    mainContainer: {
      alignItems: 'center',
      height: '50%',
      justifyContent: 'space-around',
    },
    mainButton: {
      width: '40%',
      marginTop: 10,
      paddingVertical: 16,
      backgroundColor: theme.headerColor,
      alignItems: 'center',
      borderRadius: 10,
    },
    contentArea: {
      padding: 20,
      fontSize: 18,
      alignItems: 'center',
    },
    subHeaderText: {
      width: '100%',
      marginTop: 10,
      padding: 20,
      fontSize: 20,
      textAlign: 'center',
      color: theme.black,
    },
    buttonText: {
      color: theme.black,
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
};
