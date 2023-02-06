import { combineReducers } from "redux";
// import user from "../pages/LoginPage/store/reducer"
import daycare from "../pages/DayCarePage/store/reducer"
import search from "../pages/ProductsPage/store/reducer"

const rootReducer = combineReducers({
    // user,
    daycare,
    search
});

export default rootReducer