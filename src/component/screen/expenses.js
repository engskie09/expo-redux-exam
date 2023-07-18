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
    margin: 5,
  }
});

const Expenses = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <Chart />
      </View>
      <ScrollView style={styles.listContainer}>
        <List />
      </ScrollView>
    </View>
  );
}

export default Expenses;
