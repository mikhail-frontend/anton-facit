import { getData } from '../../../plugins/axios';
import courseItem from '../courseItem';

export const getCourse = () => {
    return async (dispatch) => {
        await getData('https://httpbin.org/get');
        dispatch(courseItem.actions.setLoading(false));
    };
};
