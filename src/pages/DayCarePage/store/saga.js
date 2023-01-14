import { takeLatest, call, put } from "redux-saga/effects";
import { newDayCareRequest, activitiesGetAllRequest } from "../../../service/daycare"
import {
    NEW_DAYCARE_REQUEST, NEW_DAYCARE_SUCCESS, NEW_DAYCARE_FAIL,
    ACTIVITIES_GETALL_REQUEST, ACTIVITIES_GETALL_SUCCESS, ACTIVITIES_GETALL_FAIL
} from "./constant";
import { notification } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

function* newDayCareRequestSaga({ payload }) {
    try {
        const reponse = yield call(newDayCareRequest, payload);
        yield put({ type: NEW_DAYCARE_SUCCESS, newDayCare: reponse.data.Metadata });
        notification.open({
            message: "Booking Success",
            placement: "topRight",
            icon: <CheckOutlined style={{ color: "green" }} />,
        });
    } catch (err) {
        yield put({ type: NEW_DAYCARE_FAIL, error: err.message });
        notification.open({
            message: "Booking Fail",
            placement: "topRight",
            icon: <CloseOutlined style={{ color: "red" }} />,
        });
    }
}

function* activitiesGetAllRequestSaga({ payload }) {
    try {
        const reponse = yield call(activitiesGetAllRequest, payload);
        yield put({ type: ACTIVITIES_GETALL_SUCCESS, allActivities: reponse.data });
    } catch (err) {
        yield put({ type: ACTIVITIES_GETALL_FAIL, errorActivities: err.message });
    }
}

export function* sagaDayCare() {
    yield takeLatest(NEW_DAYCARE_REQUEST, newDayCareRequestSaga);
    yield takeLatest(ACTIVITIES_GETALL_REQUEST, activitiesGetAllRequestSaga);
}