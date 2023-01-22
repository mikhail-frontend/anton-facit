import React, {useEffect, useMemo} from 'react';
import SubHeader, {
	SubHeaderLeft,
	SubheaderSeparator,
} from '../../../layout/SubHeader/SubHeader';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Button from '../../../components/bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from "classnames";

const CourseItem = () => {
	const navigate = useNavigate();
	const { courseId } = useParams();
	const coursesList = useSelector((state: any) => state.courses.coursesList);
	const currentCourse = useMemo(() => {
		return coursesList.find((course) => Number(course.id) === Number(courseId));
	}, [courseId, coursesList]);

	useEffect(() => {
		if(!currentCourse) {
			navigate('/404')
		}
	}, [currentCourse])

	if(!currentCourse) return <></>;
	return (
		<PageWrapper title={currentCourse ? currentCourse.title : 'Course page'}>
			<SubHeader>
				<SubHeaderLeft>
					<Button color='info' isLink icon='ArrowBack' onClick={() => navigate('/courses')}>
						Back to List
					</Button>
					<SubheaderSeparator />
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div className='display-4 fw-bold pt-3 pb-5'>{currentCourse ? currentCourse.title : 'Course page'}</div>
				<div className='row g-4'>
					<div className='col-12'>
						<div className={classNames('ratio ratio-21x9', 'rounded-2', 'mb-3')}>
							<img
								src={currentCourse?.image || ''}
								alt={currentCourse ? currentCourse.title : 'Course page'}
								width='100%'
								height='auto'
								className='object-fit-contain p-5'
							/>
						</div>
					</div>
					<div className='col-12'>
						<h3 className='text-muted'>Subheading will be here</h3>
					</div>
					<div className='col-12' dangerouslySetInnerHTML={{__html: currentCourse.text}}/>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default CourseItem;
