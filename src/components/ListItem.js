import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const ListItem = ({name}) => {
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginVertical: 4,
  },
  itemName: {
    fontSize: 16,
  },
});

export default ListItem;
