import { createSlice } from '@reduxjs/toolkit';

const index = createSlice({
    name: 'courseItem',
    initialState: {
        currentCourse: null,
        courseItemLoading: true,
    },
    reducers: {
        setCurrentCourse(state, { payload }) {
            const {currentCourse} = state;
            const course = currentCourse ? currentCourse : {}
            return { ...state, currentCourse: {...course, ...payload} };
        },
        setLoading(state, { payload }) {
            return { ...state, courseItemLoading: payload };
        },
    },
});
export default index;
