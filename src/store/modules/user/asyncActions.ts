import user from "./index";
import {getData} from "../../../plugins/axios";

export const getUser = (user_id) => {
    console.log(user_id)
    return async (dispatch) => {
        const data = await getData('https://httpbin.org/get');
        dispatch(user.actions.setUserData(data));
    }
}

export const logOutUser = ({user_id}) => {
    console.log(user_id);
    return async (dispatch) => {
        dispatch(user.actions.setIsLoggedIn(false));
    }
}