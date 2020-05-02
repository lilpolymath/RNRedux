import React, {Component} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ListItem from '../components/ListItem';
import {connect} from 'react-redux';
import {deleteFood} from '../store/actions/food';

class FoodList extends Component {
  render() {
    return (
      <FlatList
        data={this.props.data}
        keyExtractor={(item, index) => item.key.toString()}
        style={styles.container}
        renderItem={data => (
          <ListItem
            onPress={() => this.props.delete(data.item.key)}
            name={data}
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
    foods: state.foodReducer.FoodList,
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
