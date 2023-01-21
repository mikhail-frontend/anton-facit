import React from 'react';
import Card, {CardBody, CardFooter, CardHeader} from '../../../../components/bootstrap/Card';
import {useSelector} from 'react-redux';
import styles from './List.module.scss';
import Button from '../../../../components/bootstrap/Button';

const List = () => {
	//eslint-disable-next-line
	const coursesList = useSelector((state: any) => state.courses.coursesList);

	return (
		<div className={styles.coursesList}>
			{
				coursesList.map((course, index) => {
					return (
						<Card className='col-md-12' key={course.id}>
							<img src={course.image}
								 alt="Storybook"
								 width={400}
								 height={400}
								 className={styles.courseImage}
								 loading={[0, 1].includes(index) ? 'eager' : 'lazy'}/>
							<CardHeader>
								<div className="display-2 fw-bold mb-4">{course.title}</div>
							</CardHeader>
							<CardBody>
								<div dangerouslySetInnerHTML={{__html: course.text}}/>
							</CardBody>
							<CardFooter>
								<Button
									size='lg'
									color='info'
									icon='Anchor'
									>
									Go to course
								</Button>
							</CardFooter>
						</Card>
					)
				})
			}

		</div>
	);
};

export default List;
