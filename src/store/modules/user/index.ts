import {createSlice} from "@reduxjs/toolkit";
import {emptyData} from "./entities";

const index = createSlice({
    name: 'user',
    initialState: {
        id: 1,
        userData: emptyData,
        isLoggedIn: false
    },
    reducers: {
        setUserData(state, {payload}) {
            return { ...state, userData: { ...state.userData, ...payload } };
        },
        setIsLoggedIn(state, {payload}:{payload: boolean}) {
            state.isLoggedIn = payload
        }
    }
});
export default index