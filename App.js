/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FoodForm from './src/screens/FoodForm';
import FoodList from './src/screens/FoodList';

const Stack = createStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Food Form">
          <Stack.Screen name="Food Form" component={FoodForm} />
          <Stack.Screen name="Saved Foods" component={FoodList} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6890f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
