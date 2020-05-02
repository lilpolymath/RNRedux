import {ADD_FOOD, DELETE_FOOD} from '../actions/actionTypes';

const INITIAL_STATE = {
  foodList: [],
};

const foodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FOOD:
      return {
        ...state,
        foodList: state.foodList.concat({
          key: Math.random(),
          name: action.data,
        }),
      };
    case DELETE_FOOD:
      return {
        ...state,
        foodList: state.foodList.filter(item => item.key !== key),
      };
    default:
      return state;
  }
};

export default foodReducer;
