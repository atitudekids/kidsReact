import { combineReducers } from 'redux';
import ChildReducer from './ChildReducer';

export default combineReducers({
    child: ChildReducer
});
