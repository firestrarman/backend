import {take, call, put, fork} from 'redux-saga/effects';

import {userApi, GET_USER, GET_USER_SUCCESS} from 'js/redux/modules/user';

export function * getUser() {
    const request = yield take(GET_USER);
    const data = yield call(userApi.getUser);
    yield put({type: GET_USER_SUCCESS, data: data});
}

export default function * rootSagas() {
    yield fork(getUser);
}
