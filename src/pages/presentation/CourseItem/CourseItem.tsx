import React, { Dispatch, useEffect, useMemo } from 'react';
import SubHeader, { SubHeaderLeft, SubheaderSeparator } from '../../../layout/SubHeader/SubHeader';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Button from '../../../components/bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CourseContent from './components/CourseContent';
import { getCourse } from '../../../store/modules/courseItem/courseItemActions';
import Loading from '../CoursesList/components/Loading';

const CourseItem = () => {
	const navigate = useNavigate();
	const { courseId } = useParams();
	const coursesList = useSelector((state: any) => state.courses.coursesList);

	const currentCourse = useMemo(() => {
		return coursesList.find((course) => Number(course.id) === Number(courseId));
	}, [courseId, coursesList]);

	const dispatch: Dispatch<any> = useDispatch();
	const courseItemLoading = useSelector((state: any) => state.courseItem.courseItemLoading);

	useEffect(() => {
		dispatch(getCourse(currentCourse));
		return () => {};
		//eslint-disable-next-line
	}, [courseId]);

	useEffect(() => {
		if (!currentCourse) {
			navigate('/404');
		}
		return () => {};
		//eslint-disable-next-line
	}, [currentCourse]);

	if (!currentCourse) return <></>;

	return (
		<PageWrapper title={currentCourse ? currentCourse.title : 'Course page'}>
			<SubHeader>
				<SubHeaderLeft>
					<Button
						color='info'
						isLink
						icon='ArrowBack'
						onClick={() => navigate('/courses')}>
						Back to List
					</Button>
					<SubheaderSeparator />
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				{courseItemLoading && <Loading text={`We're loading the course`} />}
				{!courseItemLoading && <CourseContent />}
			</Page>
		</PageWrapper>
	);
};

export default CourseItem;
