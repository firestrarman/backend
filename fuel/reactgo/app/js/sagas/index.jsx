import {take, call, put, fork} from 'redux-saga/effects';

import {userApi, GET_USER, GET_USER_SUCCESS} from 'js/redux/modules/user';
import {previewApi, GET_PREVIEW, GET_PREIVEW_SUCCESS} from 'js/redux/modules/preview';

export function * getUser(info) {
    const request = yield take(GET_USER);
    const data = yield call(userApi.getUser, request.post);
    if (data.status === true) {
        yield put({type: GET_USER_SUCCESS, data: data.data});
        return;
    }
}

export function * getPreview(info) {
    const request = yield take(GET_PREVIEW);
    const data = yield call(userApi.getUser, request.post);
    if (data.status === true) {
        yield put({type: GET_PREIVEW_SUCCESS, data: data.data});
        return;
    }
}

export default function * rootSagas() {
    yield fork(getUser);
    yield fork(getPreview);
}
