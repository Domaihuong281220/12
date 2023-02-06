import {
    SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAIL
} from "./constant";

const INIT_STATE = {
    isLoadingSearch: false,
    ProductInfo: [],
    error: null
};

const search = (state = INIT_STATE, action) => {
    switch (action.type) {
        case SEARCH_REQUEST:
            return { ...state, isLoadingSearch: true }
        case SEARCH_SUCCESS:
            return { ...state, isLoadingSearch: false, ProductInfo: action.ProductInfo }
        case SEARCH_FAIL:
            return { ...state, isLoadingSearch: false, error: action.message }

        default:
            return state;
    }
}

export default search;