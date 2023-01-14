import { combineReducers } from "redux";
import user from "../pages/LoginPage/store/reducer"
import daycare from "../pages/DayCarePage/store/reducer"

const rootReducer = combineReducers({
    user,
    daycare
});

export default rootReducer