import { takeLatest, call, put } from "redux-saga/effects";
import { ProductSearchRequest } from "../../../service/products/product"
import {
    SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAIL
} from "./constants";

function* SearchRequestSaga({ payload }) {
    try {
        const reponse = yield call(ProductSearchRequest, payload);
        console.log(reponse, "chan ngan de thuong");
        yield put({ type: SEARCH_SUCCESS, ProductInfo: reponse.data });
        sessionStorage.setItem("ProductInfo", JSON.stringify(reponse.data));
    } catch (err) {
        yield put({ type: SEARCH_FAIL, error: err.message });
    }
}


export function* sagaSearch() {
    yield takeLatest(SEARCH_REQUEST, SearchRequestSaga);
}