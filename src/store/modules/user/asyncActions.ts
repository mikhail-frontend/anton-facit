import user from "./index";
import {getData, postData} from "../../../plugins/axios";

export const getUser = (user_id) => {
    console.log(user_id)
    return async (dispatch) => {
        const data = await getData('https://httpbin.org/get', {user_id});
        console.log(data)
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