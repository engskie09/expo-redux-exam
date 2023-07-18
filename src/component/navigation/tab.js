import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import HomeScreen from '../screen/home';
import ExpensesScreen from '../screen/expenses';
import PortfolioScreen from '../screen/portfolio';
import BankAccounts from '../screen/bank-accounts';

const BottomTabNavigator = createBottomTabNavigator();

const Tab = () => {
  return (
    <BottomTabNavigator.Navigator initialRouteName='HOME'>
      <BottomTabNavigator.Screen
        name='HOME'
        component={HomeScreen}
        options={{
          title: 'Home',
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#497bd0',
          },
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='home-circle' size={35}/>,
        }}
      />

      <BottomTabNavigator.Screen
        name='EXPENSES'
        component={ExpensesScreen}
        options={{
          title: 'Expenses',
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#497bd0',
          },
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='chart-donut' size={35}/>,
        }}
      />

      <BottomTabNavigator.Screen
        name='PORTFOLIO'
        component={PortfolioScreen}
        options={{
          title: 'Portfolio',
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#497bd0',
          },
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size }) => <FontAwesome name='money' size={35}/>,
        }}
      />

      <BottomTabNavigator.Screen
        name='BANK_ACCOUNTS'
        component={BankAccounts}
        options={{
          title: 'Bank Accounts',
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#497bd0',
          },
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size }) => <FontAwesome name='list' size={35}/>,
        }}
      />
    </BottomTabNavigator.Navigator>
  );
}

export default Tab;
