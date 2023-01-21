import React from 'react';
// @ts-ignore
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import SubHeader, {SubHeaderLeft} from '../../layout/SubHeader/SubHeader';
import Page from '../../layout/Page/Page';
import Card, {CardBody} from '../../components/bootstrap/Card';


const CoursesList = () => {

	return (
		<PageWrapper  title='Courses'>
			<SubHeader>
				<SubHeaderLeft>
					<span className='h4 mb-0 fw-bold'>Courses</span>
				</SubHeaderLeft>
			</SubHeader>
			<Page>


			<div className='col-12'>
						<Card >
							<CardBody>

							</CardBody>
						</Card>
					</div>

			</Page>
		</PageWrapper>
	);
};

export default CoursesList;
