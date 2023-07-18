import { StyleSheet, Text, View } from 'react-native';

import { StackedBarChart } from "react-native-chart-kit";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 14,
  }
});


const Home = () => {
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  const data = {
    labels: ["Test1", "Test2"],
    legend: ["L1", "L2", "L3"],
    data: [
      [60, 60, 60],
      [30, 30, 60]
    ],
    barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
  };

  return (  
    <View style={styles.container}>
      <StackedBarChart
        data={data}
        width={200}
        height={220}
        chartConfig={chartConfig}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <Text style={styles.text}>Home</Text>
    </View>
  );
}

export default Home;
