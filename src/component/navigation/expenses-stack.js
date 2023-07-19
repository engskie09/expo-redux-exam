import { createStackNavigator } from '@react-navigation/stack';

import Expenses from '../screen/expenses';
import ExpensesAllCategories from '../screen/expenses-all-categories';

const Stack = createStackNavigator();

const ExpensesStack = () => {
  return (
    <Stack.Navigator initialRouteName='Expenses'>
      <Stack.Screen name='Expenses' options={{ headerShown: false }} component={Expenses} />
      <Stack.Screen name='ExpensesAllCategories' options={{ title: '' }} component={ExpensesAllCategories} />
    </Stack.Navigator>
  );
}

export default ExpensesStack