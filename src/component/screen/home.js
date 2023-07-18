import { StyleSheet, Text, View, Dimensions } from 'react-native';

import { LineChart } from "react-native-chart-kit";

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
      <LineChart
        data={{
          labels: ['1D', '1W', '1M', '3M', '1Y', 'All'],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
              strokeWidth: 2,
            },
          ],
        }}
        width={Dimensions.get('window').width}
        height={220}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff ',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        withHorizontalLines={false}
        withVerticalLines={false}
        bezier
        withDots={false}
      />
      <Text style={styles.text}>Home</Text>
    </View>
  );
}

export default Home;
