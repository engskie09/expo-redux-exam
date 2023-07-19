import 'react-native-gesture-handler';

import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { mapping, light, dark } from "@eva-design/eva";
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Provider } from 'react-redux';
import store from './store';
  
const theme = {
  light: {
    theme: light,
    icon: "sun",
    text: "LIGHT",
  },
  dark: {
    theme: dark,
    icon: "moon",
    text: "DARK",
  },
};

import Tab from './component/navigation/tab';

console.disableYellowBox = true;

const Main = () => {
  return (
    <>
      <IconRegistry icons={[EvaIconsPack]}/>
      <ApplicationProvider mapping={mapping} theme={theme}>
        <Provider store={store}>
          <NavigationContainer>
            <Tab/>
          </NavigationContainer>
        </Provider>
      </ApplicationProvider>
    </>
  );
}

registerRootComponent(Main);
