import { getData } from '../../../plugins/axios';
import courseItem from '../courseItem';
import lessonList from './entities/lessonsList';
export const getCourse = (payload) => {
	return async (dispatch) => {
		await getData('https://httpbin.org/get');
		dispatch(courseItem.actions.setLoading(false));
		dispatch(
			courseItem.actions.setCurrentCourse({
				...payload,
				lessons: lessonList,
			}),
		);
	};
};
