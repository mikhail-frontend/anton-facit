import { createSlice } from '@reduxjs/toolkit';

const index = createSlice({
    name: 'lesson',
    initialState: {
        currentLesson: null,
        lessonLoading: true,
    },
    reducers: {
        setCurrentLesson(state, { payload }) {
            const { currentLesson } = state;
            const lesson = currentLesson ? currentLesson : {};
            return { ...state, currentLesson: { ...lesson, ...payload } };
        },
        setLoading(state, { payload }) {
            return { ...state, lessonLoading: payload };
        },
    },
});
export default index;
