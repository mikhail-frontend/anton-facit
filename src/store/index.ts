import { configureStore } from '@reduxjs/toolkit';
import user from './modules/user';
import courses from './modules/courses';
import courseItem from './modules/courseItem';
const store = configureStore({
	reducer: {
		user: user.reducer,
		courses: courses.reducer,
		courseItem: courseItem.reducer,
	},
});

export default store;
