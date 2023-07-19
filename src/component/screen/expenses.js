import { StyleSheet, View } from 'react-native';

import Chart from '../shared/expenses/chart';
import TopCategoriesList from '../shared/expenses/top-categories-list';

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

const Expenses = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <Chart />
      </View>
      <View style={styles.listContainer}>
        <TopCategoriesList navigation={navigation} />
      </View>
    </View>
  );
}

export default Expenses;
