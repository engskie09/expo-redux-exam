import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider } from '@ui-kitten/components';
import { mapping, light, dark } from "@eva-design/eva";

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

const Main = () => {
  return (
    <ApplicationProvider mapping={mapping} theme={theme}>
      <NavigationContainer>
        <Tab/>
      </NavigationContainer>
    </ApplicationProvider>
  );
}

registerRootComponent(Main);
