import React from 'react'

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './screen/ZipCodeScreen';
import WeatherScreen from './screen/WeatherScreen';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ZipCodeScreen} style={styles.backdrop1} />
        <Stack.Screen name="Weather" component={WeatherScreen} />      
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  backdrop1: {
    flexDirection: 'column', //Default Portrait
    justifyContent: 'center',
    alignItems: 'center', // opposite of FlexDirection is lanscape
}
})