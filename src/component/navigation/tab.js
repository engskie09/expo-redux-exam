import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screen/home';
import ExpensesScreen from '../screen/expenses';
import PortfolioScreen from '../screen/portfolio';
import BankAccounts from '../screen/bank-accounts';

const BottomTabNavigator = createBottomTabNavigator();

const Tab = () => {
  return (
    <BottomTabNavigator.Navigator initialRouteName="HOME">
      <BottomTabNavigator.Screen
        name="HOME"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#497bd0',
          },
          headerTintColor: '#fff' 
        }}
      />

      <BottomTabNavigator.Screen
        name="EXPENSES"
        component={ExpensesScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#497bd0',
          },
          headerTintColor: '#fff' 
        }}
      />

      <BottomTabNavigator.Screen
        name="PORTFOLIO"
        component={PortfolioScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#497bd0',
          },
          headerTintColor: '#fff' 
        }}
      />

      <BottomTabNavigator.Screen
        name="BANK_ACCOUNTS"
        component={BankAccounts}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#497bd0',
          },
          headerTintColor: '#fff' 
        }}
      />
    </BottomTabNavigator.Navigator>
  );
}

export default Tab;
