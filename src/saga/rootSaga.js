import {all} from 'redux-saga/effects';
import getUserListSaga from './UserListSaga';

export function* rootSaga() {
const sagas = [getUserListSaga()];
	yield all(sagas);
}