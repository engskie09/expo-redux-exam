import { StyleSheet, View, ScrollView} from 'react-native';

import Chart from '../shared/home/chart';
import List from '../shared/home/list';

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

const Home = () => {
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

export default Home;
