import { getData } from '../../../plugins/axios';
import lesson from '../lesson';

import lessonList from '../courseItem/entities/lessonsList';
import coursesListDUMMY from '../courses/entities/coursesListDUMMY';
export const getLesson = ({ course_id, lesson_id }: { course_id: number; lesson_id: number }) => {
	return async (dispatch) => {
		let courseInList: any = coursesListDUMMY.find(({ id }) => Number(id) === Number(course_id));
		if (!courseInList) {
			return {
				course: null,
				lesson: null,
			};
		}
		courseInList = {
			...courseInList,
			lessons: lessonList,
		};
		const lessonInCourse = courseInList.lessons.find(
			({ id }) => Number(id) === Number(lesson_id),
		);
		if (!lessonInCourse) {
			return {
				course: courseInList,
				lesson: null,
			};
		}
		await getData('https://httpbin.org/get', { course_id, lesson_id });
		dispatch(lesson.actions.setLoading(false));
		dispatch(lesson.actions.setCurrentLesson(lessonInCourse));
		return {
			course: courseInList,
			lesson: lessonInCourse,
		};
	};
};
