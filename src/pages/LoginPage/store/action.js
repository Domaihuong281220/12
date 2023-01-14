import {
    LOGIN_REQUEST,
    GET_DOGBREEDS_REQUEST, 
} from "./constant";

export function loginRequest(payload) {
    return {
        type: LOGIN_REQUEST,
        payload,
    };
}

export function getDogBreedsRequest(payload) {
    return {
        type: GET_DOGBREEDS_REQUEST,
        payload,
    };
}