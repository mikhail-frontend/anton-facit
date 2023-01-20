import {createSlice} from "@reduxjs/toolkit";

const index = createSlice({
    name: 'user',
    initialState: {
        id: 1,
        userData: {
            name: "MIKHAIL",
            second_name: "KHARITONOV",
            email: "belovedoff@gmail.com",
            phone: "+1 (234) 543-2345",
            telegram: "https://t.me/rus_udemy",
            country: "TR",
            city: "ANTALYA",
            gender: "male",
            password: "countryList1",
            password_confirmation: "countryList1",
            language: "",
            image: "https://devapi.matetech.space/storage/46982/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0-2023-01-20-%D0%B2-13.57.48.png"
        },
        isLoggedIn: true
    },
    reducers: {
        setUserData(state, {payload}) {

        },
        setIsLoggedIn(state, {payload}:{payload: boolean}) {
            state.isLoggedIn = payload
        }
    }
});
export default index