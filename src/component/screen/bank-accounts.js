import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 14,
  }
});

const BankAccounts = () => {
  return (  
    <View style={styles.container}>
      <Text style={styles.text}>BankAccounts</Text>
    </View>
  );
}

export default BankAccounts;
