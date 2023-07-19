import { StyleSheet, View, ScrollView} from 'react-native';

import Chart from '../shared/expenses/chart';
import List from '../shared/expenses/list';

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
      <View style={styles.chartContainer}>
        <Chart />
      </View>
      <View style={styles.listContainer}>
        <List />
      </View>
    </View>
  );
}

export default Expenses;
