import {
    SEARCH_REQUEST
} from './constant';

export function SearchRequestaction(payload) {
    return {
        type: SEARCH_REQUEST,
        payload,
    };
}