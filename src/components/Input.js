import React, {Component} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

export class Input extends Component {
  state = {
    inputValue: '',
  };

  render() {
    const {placeholder, onChange} = this.props;
    const {inputValue} = this.state;

    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={inputValue}
          onChangeText={text => {
            onChange(text);
          }}
          placeholder={placeholder}
        />
      </View>
    );
  }
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
    marginVertical: 8,
  },
  fieldName: {
    fontSize: 14,
    marginVertical: 4,
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
  },
});
