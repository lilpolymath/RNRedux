import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const Input = ({placeholder, inputValue, handleChange}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        value={inputValue}
        onChangeText={handleChange}
        placeholder={placeholder}
      />
    </View>
  );
};

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

export default Input;
