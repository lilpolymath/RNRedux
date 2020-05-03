import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

import Input from '../components/Input';
import Button from '../components/Button';
import {addFood} from '../store/actions/food';

class Form extends Component {
  state = {
    food: '',
  };

  handleChange = text => {
    this.setState({food: text});
  };

  render() {
    const {food} = this.state;

    return (
      <View style={styles.container}>
        <Input
          value={food}
          onChangeText={this.handleChange}
          handleChange={text => this.handleChange(text)}
          placeholder="Enter your favourite food"
        />
        <Button
          onPress={() => {
            this.props.add(food);
          }}
          name="Submit"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  return {
    foods: state.foods.foodList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: food => dispatch(addFood(food)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
