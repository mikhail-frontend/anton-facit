import { createSlice } from '@reduxjs/toolkit';

const index = createSlice({
	name: 'courses',
	initialState: {
		coursesList: [],
		coursesLoading: true,
	},
	reducers: {
		setCourses(state, { payload }) {
			return { ...state, coursesList: payload };
		},
		setLoading(state, { payload }) {
			return { ...state, coursesLoading: payload };
		},
	},
});
export default index;
