import {
    NEW_DAYCARE_REQUEST, NEW_DAYCARE_SUCCESS, NEW_DAYCARE_FAIL,
    ACTIVITIES_GETALL_REQUEST, ACTIVITIES_GETALL_SUCCESS, ACTIVITIES_GETALL_FAIL
} from "./constant";

const INIT_STATE_LOGIN = {
    newDayCare: {},
    isLoading: false,
    error: null,

    allActivities: [],
    isLoadingActivities: false,
    errorActivities: null
};

const daycare = (state = INIT_STATE_LOGIN, action) => {
    switch (action.type) {
        case NEW_DAYCARE_REQUEST:
            return { ...state, isLoading: true }
        case NEW_DAYCARE_SUCCESS:
            return { ...state, isLoading: false, newDayCare: action.newDayCare }
        case NEW_DAYCARE_FAIL:
            return { ...state, isLoading: false, error: action.message }

        case ACTIVITIES_GETALL_REQUEST:
            return { ...state, isLoadingActivities: true }
        case ACTIVITIES_GETALL_SUCCESS:
            return { ...state, isLoadingActivities: false, allActivities: action.allActivities }
        case ACTIVITIES_GETALL_FAIL:
            return { ...state, isLoadingActivities: false, errorActivities: action.message }
        default:
            return state;
    }
}

export default daycare;