import { StyleSheet } from 'react-native';

export const styles = theme => {
  return StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: theme.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      color: theme.text,
    },
    registerText: {
      marginTop: 20,
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.white,
    },
    inputArea: {
      height: 200,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 40,
      width: '90%',
      backgroundColor: theme.input,
      marginBottom: 15,
      padding: 10,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: theme.grey,
      color: theme.black,
    },
    button: {
      height: 40,
      width: 100,
      backgroundColor: theme.button,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 15,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: '400',
      color: theme.black,
    },
  });
};
