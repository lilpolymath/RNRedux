/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import {addFood} from '../store/actions/food';

import Input from '../components/Input';
import Button from '../components/Button';

export class FoodForm extends Component {
  state = {
    food: null,
  };

  onChange = text => {
    this.setState({inputValue: text});
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.header}>React Native Redux</Text>
          <Input
            onChangeText={this.onChange}
            placeholder="Enter your favourite food"
          />
          <Button
            onPress={() => this.props.add(this.state.text)}
            name="Submit"
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.push('Saved Foods')}
            style={styles.link}>
            <Text>Check Saved Foods</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  content: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    fontSize: 24,
    marginVertical: 24,
  },
  link: {
    marginVertical: 8,
  },
});

const mapStateToProps = state => {
  return {
    foods: state.foodReducer.FoodList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: key => dispatch(addFood(key)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodForm);
