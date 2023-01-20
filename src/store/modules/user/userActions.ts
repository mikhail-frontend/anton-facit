import user from "./";
import {getData, postData} from "../../../plugins/axios";
import {fullData} from './entities';


export const simpleLogin = () => {
    return  (dispatch) => {
        dispatch(user.actions.setIsLoggedIn(true));
    }
}

export const setUserFromStorage = (payload:Record<string, unknown> = {}) => {
    if(payload && payload.email ) {
        return  (dispatch) => {
            dispatch(user.actions.setUserData(payload));
        }
    }
}


export const getUser = (user_id) => {
    return async (dispatch) => {
        await getData('https://httpbin.org/get', {user_id});
        dispatch(user.actions.setIsLoggedIn(true));
        //dispatch(user.actions.setUserData(data));
    }
}

export const logOutUser = ({user_id}) => {
    return async (dispatch) => {
        await postData('https://httpbin.org/post', {user_id}, 'POST')
        dispatch(user.actions.setIsLoggedIn(false));
    }
}

export const logInUser = ({email, password}) => {
    return async (dispatch) => {
        await postData('https://httpbin.org/post', {email, password}, 'POST');
        if (email === 'belovedoff@gmail.com' && password === 'countryList1') {
            dispatch(user.actions.setIsLoggedIn(true));
            dispatch(user.actions.setUserData(fullData));
            return true
        }
        return false;

    }
}

export const signUpUser = ({email, name, second_name, password}) => {
    return async (dispatch) => {
        await postData('https://httpbin.org/post', {email, name, second_name, password, action: 'signUpUser'}, 'POST')
        dispatch(user.actions.setUserData({email, name, second_name, password, password_confirmation: password}))
        dispatch(user.actions.setIsLoggedIn(true))
    }
}