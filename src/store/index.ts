import { configureStore } from '@reduxjs/toolkit';
import user from './modules/user';
import courses from "./modules/courses";

const store = configureStore({
	reducer: {
		user: user.reducer,
		courses: courses.reducer
	},
});

export default store;
