import {
    NEW_DAYCARE_REQUEST,
    ACTIVITIES_GETALL_REQUEST
} from "./constant";

export function newDayCareRequest(payload) {
    return {
        type: NEW_DAYCARE_REQUEST,
        payload,
    };
}

export function activitiesGetAllRequest(payload) {
    return {
        type: ACTIVITIES_GETALL_REQUEST,
        payload,
    };
}