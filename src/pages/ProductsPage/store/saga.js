import { takeLatest, call, put } from "redux-saga/effects";
import { ProductSearchRequest } from "../../../service/products/product"
import{ProductNoteRequest} from "../../../service/products/product"
import {
    SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAIL, NOTE_REQUEST, NOTE_SUCCESS, NOTE_FAIL
} from "./constant";

function* SearchRequestSaga({ payload }) {
    try {
        const reponse = yield call(ProductSearchRequest, payload);
        // console.log(reponse, "chan ngan de thuong");
        yield put({ type: SEARCH_SUCCESS, ProductInfo: reponse.data });
        sessionStorage.setItem("ProductInfo", JSON.stringify(reponse.data));
    } catch (err) {
        yield put({ type: SEARCH_FAIL, error: err.message });
    }
}

function* NoteRequestSaga({ payload }) {
    try {
        const reponseNote = yield call(ProductNoteRequest, payload);
        console.log(reponseNote, "chan ngan de thuong");
        yield put({ type: NOTE_SUCCESS, NoteInfo: reponseNote.data });
        sessionStorage.setItem("NoteInfo", JSON.stringify(reponseNote.data));
    } catch (err) {
        yield put({ type: NOTE_FAIL, error: err.message });
    }
}

export function* sagaSearch() {
    yield takeLatest(SEARCH_REQUEST, SearchRequestSaga);
    yield takeLatest(NOTE_REQUEST, NoteRequestSaga);
}