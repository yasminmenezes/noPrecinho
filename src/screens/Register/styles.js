import { StyleSheet } from 'react-native';

export const styles = theme => {
  return StyleSheet.create({
    containerRegister: {
      flex: 1,
      backgroundColor: theme.background,
    },
    topicTitle: {
      marginTop: 14,
      marginLeft: 14,
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.title,
    },
    topic: {
      fontSize: 20,
      color: theme.title,
    },
    text: {
      fontSize: 18,
      color: theme.title,
    },
    inputArea: {
      backgroundColor: theme.subBackground,
      marginTop: 14,
      paddingTop: 14,
      paddingHorizontal: 14,
      width: '100%',
      alignItems: 'center',
    },
    input: {
      marginBottom: 14,
      height: 40,
      width: '100%',
      backgroundColor: theme.input,
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
    buttonArea: {
      marginTop: 14,
      width: '100%',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 18,
      fontWeight: '400',
      color: theme.black,
    },
  });
};
