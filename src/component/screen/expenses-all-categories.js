import { StyleSheet, View } from 'react-native';

import AllCategoriesList from '../shared/expenses/all-categories-list';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chartContainer: {
    margin: 5,
  },
  listContainer: {
    flex: 1,
    margin: 5,
  }
});

const Expenses = () => {
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <AllCategoriesList />
      </View>
    </View>
  );
}

export default Expenses;
