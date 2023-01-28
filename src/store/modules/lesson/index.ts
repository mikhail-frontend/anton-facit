import { createSlice } from '@reduxjs/toolkit';

const index = createSlice({
    name: 'lesson',
    initialState: {
        currentLesson: null,
        lessonLoading: true,
    },
    reducers: {
        setCurrentCourse(state, { payload }) {
            const { currentLesson } = state;
            const lesson = currentLesson ? currentLesson : {};
            return { ...state, currentLesson: { ...currentLesson, ...payload } };
        },
        setLoading(state, { payload }) {
            return { ...state, courseItemLoading: payload };
        },
    },
});
export default index;
