import { combineReducers } from 'redux';
import ChildReducer from './ChildReducer';
import ParentReducer from './ParentReducer';

export default combineReducers({
    child: ChildReducer,
    parent: ParentReducer
});
