import user from "./";
import {getData, postData} from "../../../plugins/axios";

export const getUser = (user_id) => {
    console.log(user_id)
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
        await postData('https://httpbin.org/post', {email, password}, 'POST')
        dispatch(user.actions.setIsLoggedIn(true));
    }
}

export const signUpUser = ({email, name, second_name, password}) => {
    return async (dispatch) => {
        await postData('https://httpbin.org/post', {email, name, second_name, password, action: 'signUpUser'}, 'POST')
        dispatch(user.actions.setUserData({email, name, second_name, password, password_confirmation: password}))
    }
}