import { configureStore } from '@reduxjs/toolkit';
import user from './modules/user';
import courses from './modules/courses';
import courseItem from './modules/courseItem';
import lesson from './modules/lesson';
const store = configureStore({
	reducer: {
		user: user.reducer,
		courses: courses.reducer,
		courseItem: courseItem.reducer,
		lesson: lesson.reducer,
	},
});

export default store;
