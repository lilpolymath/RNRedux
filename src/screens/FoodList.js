import React, {Component} from 'react';
import {FlatList, StyleSheet, Alert} from 'react-native';
import ListItem from '../components/ListItem';
import {connect} from 'react-redux';
import {deleteFood} from '../store/actions/food';

class FoodList extends Component {
  deleteFood = item => {
    Alert.alert('Success', `You have successfully deleted ${item.name}`);

    this.props.delete(item.key);
  };

  render() {
    return (
      <FlatList
        data={this.props.foods}
        keyExtractor={(item, index) => index}
        style={styles.container}
        renderItem={data => (
          <ListItem
            onPress={this.deleteFood}
            deleteFood={() => this.deleteFood(data.item)}
            name={data.item.name}
          />
        )}
      />
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

const mapStateToProps = state => {
  return {
    foods: state.foods.foodList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    delete: key => dispatch(deleteFood(key)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FoodList);
