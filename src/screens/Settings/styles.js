import { StyleSheet } from 'react-native';

export const styles = theme => {
  return StyleSheet.create({
    containerSettings: {
      flex: 1,
      backgroundColor: theme.background,
    },
    topicArea: {
      marginTop: 30,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.subBackground,
      padding: 20,
    },
    topic: {
      fontSize: 22,
      fontWeight: 'bold',
      color: theme.title,
    },
    topicRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 14,
    },
    topicOption: {
      fontSize: 20,
      color: theme.text,
      marginRight: 14,
      marginLeft: 14,
    },
  });
};
