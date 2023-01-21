import {getData} from "../../../plugins/axios";
import courses from "../courses";

export const getCoursesList = () => {
    return async (dispatch) => {
        dispatch(courses.actions.setLoading(true))
        const {data} = await getData('https://httpbin.org/get');
        dispatch(courses.actions.setCourses([]))
        console.log(data);
        dispatch(courses.actions.setLoading(true))
    };
};