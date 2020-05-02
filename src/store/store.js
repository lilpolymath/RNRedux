import {createStore, combineReducers} from 'redux';
import foodReducer from '../store/reducers/reducers';

const rootReducer = combineReducers({
  foodReducer: foodReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
