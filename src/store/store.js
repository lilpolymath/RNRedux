import {createStore, combineReducers} from 'redux';
import foodReducer from '../store/reducers/reducers';

const rootReducer = combineReducers({
  foods: foodReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
