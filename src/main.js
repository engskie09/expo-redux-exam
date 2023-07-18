import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';


import Tab from './component/navigation/tab';

const Main = () => {
  return (
    <NavigationContainer>
      <Tab/>
    </NavigationContainer>
  );
}

registerRootComponent(Main);
