import { View, Dimensions } from 'react-native';

import { PieChart } from "react-native-chart-kit";

const data = [
  {
    name: 'Rent',
    expenseRate: 25,
    color: '#ffb6c1',
    legendFontColor: '#000000',
    legendFontSize: 15,
  },
  {
    name: 'Restaurants',
    expenseRate: 10,
    color: '#63e5ff',
    legendFontColor: '#000000',
    legendFontSize: 15,
  },
  {
    name: 'Drinks',
    expenseRate: 30,
    color: '#99d18f',
    legendFontColor: '#000000',
    legendFontSize: 15,
  },
  {
    name: 'Uber',
    expenseRate: 19,
    color: '#f3e260',
    legendFontColor: '#000000',
    legendFontSize: 15,
  },
  {
    name: 'Groceries',
    expenseRate: 18,
    color: '#ffa500',
    legendFontColor: '#000000',
    legendFontSize: 15,
  },
];

const Chart = () => {

  return (
    <View style={{backgroundColor: '#ffffff'}}>
      <PieChart
        data={data}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
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
        accessor="expenseRate"
        paddingLeft="15"
        // absolute //for the absolute number remove if you want percentage
        // hasLegend
      />
    </View>
  );
}

export default Chart;
