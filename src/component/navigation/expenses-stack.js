import { createStackNavigator } from '@react-navigation/stack';

import Expenses from '../screen/expenses';
import ExpensesAllCategories from '../screen/expenses-all-categories';

const Stack = createStackNavigator();

const ExpensesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Expenses" component={Expenses} />
      <Stack.Screen name="ExpensesAllCategories" component={ExpensesAllCategories} />
    </Stack.Navigator>
  );
}

export default ExpensesStack