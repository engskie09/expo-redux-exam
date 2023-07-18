import { StyleSheet, View } from 'react-native';

import Chart from '../shared/home/chart';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 14,
  }
});

const Home = () => {
  return (
    <View style={styles.container}>
      <Chart />
    </View>
  );
}

export default Home;
