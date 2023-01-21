import React, { useMemo } from 'react';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../../layout/SubHeader/SubHeader';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Button from '../../../components/bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CourseItem = () => {
	const navigate = useNavigate();
	const { courseId } = useParams();
	const coursesList = useSelector((state: any) => state.courses.coursesList);
	const currentCourse = useMemo(() => {
		console.log(coursesList);
		return coursesList.find((course) => Number(course.id) === Number(courseId));
	}, [courseId, coursesList]);

	return (
		<PageWrapper title={currentCourse ? currentCourse.title : 'Course page'}>
			<SubHeader>
				<SubHeaderLeft>
					<Button color='info' isLink icon='ArrowBack' onClick={() => navigate(-1)}>
						Back to List
					</Button>
					<SubheaderSeparator />
					<SubHeaderRight>
						<h1 className='display-8'>
							{currentCourse ? currentCourse.title : 'Course page'}
						</h1>
					</SubHeaderRight>
				</SubHeaderLeft>
			</SubHeader>
			<Page container='fluid'>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusamus assumenda
					aut corporis dolores eius eos ex harum hic, mollitia officiis praesentium quae
					quas quisquam saepe, similique soluta velit voluptatibus.
				</div>
			</Page>
		</PageWrapper>
	);
};

export default CourseItem;
