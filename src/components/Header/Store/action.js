import {
    SEARCH_REQUEST
} from './constants';

export function SearchRequestaction(payload) {
    return {
        type: SEARCH_REQUEST,
        payload,
    };
}