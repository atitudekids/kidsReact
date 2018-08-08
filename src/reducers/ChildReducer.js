import { ADD_CHILD, FETCH_CHILDREN } from '../actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case ADD_CHILD:
            return [...state, action.payload];
        case FETCH_CHILDREN:
            return action.children;     
		default:
			return state;	
	}
}; 
