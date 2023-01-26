import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import ShopBook from '../reducers/index';
const store = createStore(ShopBook, applyMiddleware(thunkMiddleware));
export default store;
