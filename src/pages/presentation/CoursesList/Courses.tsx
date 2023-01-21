import React from 'react';
// @ts-ignore
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, {SubHeaderLeft} from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import Card, {CardBody} from '../../../components/bootstrap/Card';
import Spinner from '../../../components/bootstrap/Spinner';


const CoursesList = () => {

	return (
		<PageWrapper  title='Courses'>
			<SubHeader>
				<SubHeaderLeft>
					<span className='h4 mb-0 fw-bold'>Courses</span>
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div className="d-flex align-items-center justify-content-center flex-column m-auto">
					<Spinner size='10rem' color='primary' className='mb-4' />
					<h2 className='h2 mt-2 mb-2'  style={{fontSize: '3rem'}}>Please, wait a bit</h2>
					<p style={{fontSize: '2rem'}}>
						We're loading courses list
					</p>
				</div>
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
