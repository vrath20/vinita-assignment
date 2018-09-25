import { takeLatest, call, put } from 'redux-saga/effects';

import { addUser } from '../action/SaveUserAction';



export const result = () =>  fetch('https://reqres.in/api/users?page=1&per_page=10')
		.then(response => response.json())
	.catch(err => console.error( err.toString()));


export function* getUserList(){
	try{
		const data = yield call(result);
		if(data) {
			yield put(addUser(data))
		}
	} catch(err){
		console.log(err);
	}

}


export default function* getUserListSaga(){
	yield takeLatest('GET_MORE_USERS', getUserList );
}
