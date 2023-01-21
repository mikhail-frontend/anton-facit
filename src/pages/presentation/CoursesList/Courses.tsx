import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import { getCoursesList } from '../../../store/modules/courses/coursesActions';
import {useEffect} from "react";
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, {SubHeaderLeft} from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import Loading from "./components/Loading";
import List from "./components/List";


const Courses = () => {
	const dispatch: any = useDispatch();
	const coursesLoading = useSelector((state: any) => state.courses.coursesLoading);


	useEffect(() => {
		if(!coursesLoading) return;
		dispatch(getCoursesList());
		return () => {};
	}, [])


	return (
		<PageWrapper title='Courses'>
			<SubHeader>
				<SubHeaderLeft>
					<span className='h4 mb-0 fw-bold'>Courses</span>
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				{coursesLoading && <Loading/>}
				{!coursesLoading && <List/>}
			</Page>
		</PageWrapper>
	);
};

export default Courses;