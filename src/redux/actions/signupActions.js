 // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB7SsKI7D7uUZ6t-f1ssIKVLXiCCBvbFXI
import axios from "axios";
export const signupUser = (email, password) => {
    return function(dispatch) {
        dispatch(signupUserStart());

        const data = {
            email,
            password,
            returnSecureToken: true
        };
        
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB7SsKI7D7uUZ6t-f1ssIKVLXiCCBvbFXI", data)
        .then(result => {
            console.log(result);
            dispatch(signupUserSuccess(result.data))
        }).catch(err => {
            dispatch(signupUserError(err))
        })
        
    }
};
export const signupUserStart = () => {
    return {
        type: "SIGNUP_USER_START"
    };
};
export const signupUserSuccess = data => {
    return {
        type: "SIGNUP_USER_SUCCESS",
        saving: false,
        error: null,
        data
    };
};
export const signupUserError = error => {
    return {
        type: "SIGNUP_USER_ERROR",
        error
    };
};

