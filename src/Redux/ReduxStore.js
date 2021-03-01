import {createStore } from 'redux';
import {combineReducers} from 'redux';
import cakeReducer from './cake/CakeReducer';
import iceCreamReducer from './icecream/IceCreamReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

const reduxStore = createStore(rootReducer);

export default reduxStore;