import { takeLatest, call, put } from "redux-saga/effects";
import { userLoginRequest } from "../../../service/user"
import { getDogBreedsRequest } from "../../../service/pets"
import { 
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL,
    GET_DOGBREEDS_REQUEST, GET_DOGBREEDS_SUCCESS, GET_DOGBREEDS_FAIL
 } from "./constant";

function* loginRequestSaga({ payload }) {
    try {
        const reponse = yield call(userLoginRequest, payload);
        yield put({ type: LOGIN_SUCCESS, userProfile: reponse.data.Metadata });
    } catch (err) {
        yield put({ type: LOGIN_FAIL, error: err.message });
    }
}

function* getDogBreedsRequestSaga({ payload }) {
    try {
        const reponse = yield call(getDogBreedsRequest, payload);
        yield put({ type: GET_DOGBREEDS_SUCCESS, dogBreeds: reponse.data });
    } catch (err) {
        yield put({ type: GET_DOGBREEDS_FAIL, errorGetDogBreeds: err.message });
    }
}

export function* sagaLogin() {
    yield takeLatest(LOGIN_REQUEST, loginRequestSaga);
    yield takeLatest(GET_DOGBREEDS_REQUEST, getDogBreedsRequestSaga);
}