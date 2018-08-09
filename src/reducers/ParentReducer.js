import { PARENT_ADD, PARENT_FETCH } from '../actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case PARENT_ADD:
            return [...state, action.payload];
        case PARENT_FETCH:
            return action.parent;     
		default:
			return state;	
	}
}; 