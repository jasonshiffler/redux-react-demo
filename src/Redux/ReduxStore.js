import {createStore } from 'redux';
import cakeReducer from './cake/CakeReducer';

const reduxStore = createStore(cakeReducer);

export default reduxStore;