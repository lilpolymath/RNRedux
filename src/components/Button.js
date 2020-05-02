import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {name} = this.props;
    return (
      <TouchableOpacity
        onPress={() => this.props.onPress()}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{name}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 12,
    width: 120,
    borderRadius: 10,
    marginVertical: 8,
    backgroundColor: '#6890f0',
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
});
