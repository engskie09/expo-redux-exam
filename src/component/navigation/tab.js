import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screen/home';

const BottomTabNavigator = createBottomTabNavigator();

const Tab = () => {
  return (
    <BottomTabNavigator.Navigator initialRouteName="Home">
      <BottomTabNavigator.Screen name="Home" component={HomeScreen} />
    </BottomTabNavigator.Navigator>
  );
}

export default Tab;
