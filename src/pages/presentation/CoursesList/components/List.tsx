import React from 'react';
import Card, {CardBody, CardFooter, CardHeader} from '../../../../components/bootstrap/Card';
import {useSelector} from 'react-redux';
import styles from './List.module.scss';
import Button from '../../../../components/bootstrap/Button';
import {Link} from 'react-router-dom';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const List = () => {
	const coursesList = useSelector((state: any) => state.courses.coursesList);

	return (
		<ResponsiveMasonry
			columnsCountBreakPoints={{ 1199: 1, 1200: 2}}
		>
		<Masonry className={styles.coursesList} gutter={'0.5rem 1.5rem'} >
			{coursesList.map((course, index) => {
				return (

					<Link to={`/courses/course/${course.id}`} key={course.id}>
						<Card className={`col-md-12 ${styles.course}`} >
							<div className={`row g-4 ${styles.courseContent}`}>
								<img
									src={`${course.image}`}
									alt='Storybook'
									width={400}
									height={400}
									className={`${styles.courseImage}`}
									loading={[0, 1].includes(index) ? 'eager' : 'lazy'}
								/>
							<div className={styles.courseMain}>
								<CardHeader>
									<div className={`display-3 fw-bold mb-4 ${styles.courseTitle}`}>{course.title}</div>
								</CardHeader>
								<CardBody>
									<div dangerouslySetInnerHTML={{__html: course.text}}/>
								</CardBody>
								<CardFooter>

									<Button size='lg' color='info' icon='Anchor'>
										Start education
									</Button>

								</CardFooter>
							</div>
							</div>

						</Card>
					</Link>

				);
			})}
		</Masonry>
		</ResponsiveMasonry>
	);
};

export default List;
