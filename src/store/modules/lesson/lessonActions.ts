import { getData } from '../../../plugins/axios';
import lesson from "../lesson";

import lessonList from '../courseItem/entities/lessonsList';
import coursesListDUMMY from "../courses/entities/coursesListDUMMY";
export const getCourse = ({course_id, lesson_id}: {course_id:number, lesson_id: number}) => {
    return async (dispatch) => {
        let courseInList:any = coursesListDUMMY.find(({id}) => Number(id) === Number(course_id));
        if(!courseInList) {
            return {
                course: null,
                lesson: null
            }
        }
        courseInList = {
            ...courseInList,
            lessons: lessonList,
        }
        const lessonInCourse = courseInList.find(({id}) => Number(id) === Number(lesson_id));
        if(!lessonInCourse) {

        }
        await getData('https://httpbin.org/get', {course_id, lesson_id});

    };
};
