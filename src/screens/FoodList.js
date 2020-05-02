import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ListItem from '../components/ListItem';

export default class FoodList extends Component {
  data = ['One', 'Two', 'Third'];
  render() {
    return (
      <View style={styles.container}>
        {this.data.map(item => (
          <ListItem name={item} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6890f0',
    padding: 16,
  },
});
