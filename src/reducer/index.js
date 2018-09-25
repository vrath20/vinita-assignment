import { combineReducers }from 'redux';

import List from './UserListReducer';

const rootReducer = combineReducers({
	UserList : List
});

export default rootReducer;