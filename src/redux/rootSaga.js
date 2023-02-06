import { all } from "redux-saga/effects";
// import * as login from "../pages/LoginPage/store/saga";
import * as daycare from "../pages/DayCarePage/store/saga";
import * as search from "../pages/ProductsPage/store/saga";

export default function* rootSaga() {
    yield all([
        // login.sagaLogin(),
        daycare.sagaDayCare(),
        search.sagaSearch()
    ]);
}