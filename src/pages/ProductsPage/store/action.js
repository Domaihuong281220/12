import {
    SEARCH_REQUEST,NOTE_REQUEST
} from './constant';

export function SearchRequestaction(payload) {
    return {
        type: SEARCH_REQUEST,
        payload,
    };
}

export function NoteRequestaction(payload) {
    return {
        type: NOTE_REQUEST,
        payload,
    };
}