import {take, call, put, fork} from 'redux-saga/effects';

import {userApi, GET_USER, GET_USER_SUCCESS} from 'js/redux/modules/user';

export function * getUser(info) {
    const request = yield take(GET_USER);
    const data = yield call(userApi.getUser, request.post);
    if (data.status === '0') {
        yield put({type: GET_USER_SUCCESS, data: data.data});
        return;
    }
}

export default function * rootSagas() {
    yield fork(getUser);
}
