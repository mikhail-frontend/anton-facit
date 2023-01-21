import { getData } from '../../../plugins/axios';
import courses from '../courses';
import coursesListDUMMY from "./entities/coursesListDUMMY";
export const getCoursesList = () => {
	return async (dispatch) => {
		const response = await getData('https://httpbin.org/get');
		console.log({ response });
		dispatch(courses.actions.setCourses(coursesListDUMMY));
		dispatch(courses.actions.setLoading(false));
	};
};
