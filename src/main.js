import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Tab from './component/navigation/tab';

const Main = () => {
  return (
    <View>
      <NavigationContainer>
        <Tab/>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

registerRootComponent(Main);
