/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/screens/Home';
import FoodList from './src/screens/FoodList';

const Stack = createStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Food Form">
          <Stack.Screen name="Food Form" component={Home} />
          <Stack.Screen name="Saved Foods" component={FoodList} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
