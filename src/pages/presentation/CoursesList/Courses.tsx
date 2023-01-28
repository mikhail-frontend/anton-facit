import React, { Dispatch, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCoursesList } from '../../../store/modules/courses/coursesActions';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, { SubHeaderLeft } from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import Loading from './components/Loading';
import List from './components/List';

const Courses = () => {
	const dispatch: Dispatch<any> = useDispatch();
	const coursesLoading = useSelector((state: any) => state.courses.coursesLoading);

	useEffect(() => {
		if (!coursesLoading) return;
		dispatch(getCoursesList());
		return () => {};
		//eslint-disable-next-line
	}, []);

	return (
		<PageWrapper title='Courses'>
			<SubHeader>
				<SubHeaderLeft>
					<span className='h4 mb-0 fw-bold'>Courses</span>
				</SubHeaderLeft>
			</SubHeader>
			<Page container='fluid'>
				{coursesLoading && <Loading text={`We're loading courses list`} />}
				{!coursesLoading && <List />}
			</Page>
		</PageWrapper>
	);
};

export default Courses;
