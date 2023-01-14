import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL,
    GET_DOGBREEDS_REQUEST, GET_DOGBREEDS_SUCCESS, GET_DOGBREEDS_FAIL,
} from "./constant";

const INIT_STATE_LOGIN = {
    isLoading: false,
    userProfile: [],
    error: null,

    isLoadingDogBreeds: false,
    dogBreeds: [],
    errorGetDogBreeds: null,
};

const user = (state = INIT_STATE_LOGIN, action) => {
    switch (action.type) {
        //Login
        case LOGIN_REQUEST:
            return { ...state, isLoading: true }
        case LOGIN_SUCCESS:
            sessionStorage.setItem("token", action.userProfile[0].Token);
            sessionStorage.setItem("userProfile", JSON.stringify(action.userProfile[0]));
            window.location.href = "./dashboard";
            return { ...state, isLoading: false, userProfile: action.userProfile }
        case LOGIN_FAIL:
            return { ...state, isLoading: false, error: action.message }

        //Get_DogBreeds
        case GET_DOGBREEDS_REQUEST:
            return { ...state, isLoadingDogBreeds: true }
        case GET_DOGBREEDS_SUCCESS:
            return { ...state, isLoadingDogBreeds: false, dogBreeds: action.dogBreeds }
        case GET_DOGBREEDS_FAIL:
            return { ...state, isLoadingDogBreeds: false, errorGetDogBreeds: action.message }
        default:
            return state;
    }
}

export default user;