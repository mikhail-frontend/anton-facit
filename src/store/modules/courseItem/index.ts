import { createSlice } from '@reduxjs/toolkit';
// import coursesListDUMMY from '../../modules/courses/entities/coursesListDUMMY';

const index = createSlice({
    name: 'courseItem',
    initialState: {
        currentCourse: null,
        coursesLoading: true,
    },
    reducers: {
        setCurrentCourse(state, { payload }) {
            const {currentCourse} = state;
            const course = currentCourse ? currentCourse : {}
            return { ...state, currentCourse: {...course, ...payload} };
        },
        setLoading(state, { payload }) {
            return { ...state, coursesLoading: payload };
        },
    },
});
export default index;
