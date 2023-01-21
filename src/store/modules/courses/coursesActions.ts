import { getData } from '../../../plugins/axios';
import courses from '../courses';

export const getCoursesList = () => {
	return async (dispatch) => {
		const response = await getData('https://httpbin.org/get');
		console.log({ response });
		dispatch(courses.actions.setCourses([]));
		dispatch(courses.actions.setLoading(false));
	};
};
