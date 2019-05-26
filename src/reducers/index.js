import { combineReducers } from 'redux';
import products from './products';
import SelectedItem from './SelectedItem';
export default combineReducers({
    products,
    SelectedItem
});