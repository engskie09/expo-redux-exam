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
    margin: 5,
  }
});

const Home = () => {
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

export default Home;
