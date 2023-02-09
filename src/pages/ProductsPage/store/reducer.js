import {
    SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAIL, NOTE_REQUEST, NOTE_SUCCESS, NOTE_FAIL
} from "./constant";

const INIT_STATE = {
    isLoadingSearch: false,
    ProductInfo: [],
    error: null,
    NoteInfo: [],
    isLoadinNote: false,
    errorNote: null,
};


const search = (state = INIT_STATE, action) => {
    switch (action.type) {
        case SEARCH_REQUEST:
            return { ...state, isLoadingSearch: true }
        case SEARCH_SUCCESS:
            return { ...state, isLoadingSearch: false, ProductInfo: action.ProductInfo }
        case SEARCH_FAIL:
            return { ...state, isLoadingSearch: false, error: action.message }

        case NOTE_REQUEST:
            return { ...state, isLoadinNote: true }
        case NOTE_SUCCESS:
            return { ...state, isLoadinNote: false, NoteInfo: action.NoteInfo }
        case NOTE_FAIL:
            return { ...state, isLoadinNote: false, errorNote: action.message }

        default:
            return state;
    }
}


export default search;