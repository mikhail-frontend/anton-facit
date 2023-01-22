import { createSlice } from '@reduxjs/toolkit';
import coursesListDUMMY from './entities/coursesListDUMMY';

const index = createSlice({
	name: 'courses',
	initialState: {
		coursesList: coursesListDUMMY,
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
