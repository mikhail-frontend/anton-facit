import React from 'react';
import Card, {CardBody, CardFooter, CardHeader} from '../../../../components/bootstrap/Card';
import {useSelector} from 'react-redux';
import styles from './List.module.scss';
import Button from '../../../../components/bootstrap/Button';
import {Link} from 'react-router-dom';

const List = () => {
	const coursesList = useSelector((state: any) => state.courses.coursesList);

	return (
		<div className={styles.coursesList}>
			{coursesList.map((course, index) => {
				return (
					<Card className='col-md-12' key={course.id}>
						<div className="row g-4">


							<div className="col-md-5">
								<img
									src={course.image}
									alt='Storybook'
									width={400}
									height={400}
									className={styles.courseImage}
									loading={[0, 1].includes(index) ? 'eager' : 'lazy'}
								/>
							</div>
							<div className="col-md-6">
								<CardHeader>
									<div className='display-3 fw-bold mb-4'>{course.title}</div>
								</CardHeader>
								<CardBody>
									<div dangerouslySetInnerHTML={{__html: course.text}}/>
								</CardBody>
								<CardFooter>
									<Link to={`/courses/course/${course.id}`}>
										<Button size='lg' color='info' icon='Anchor'>
											Go to course
										</Button>
									</Link>
								</CardFooter>
							</div>
						</div>

					</Card>
				);
			})}
		</div>
	);
};

export default List;
