import React from 'react';
import useDarkMode from '../../../../hooks/useDarkMode';
import Card, { CardBody, CardTitle } from '../../../../components/bootstrap/Card';
import classNames from 'classnames';
import Badge from '../../../../components/bootstrap/Badge';

type TColor =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'info'
	| 'warning'
	| 'danger'
	| 'light'
	| 'dark';

type TTags = { text: string; color: TColor };
export type IItemProps = {
	id: string | number;
	image: string;
	title: string;
	description: string;
	tags: TTags[];
	color: TColor;
};
const CourseLesson: React.FC<IItemProps> = ({ image, title, description, tags, color }) => {
	const { darkModeStatus } = useDarkMode();
	return (
		<>
			<Card className='cursor-pointer shadow-3d-primary shadow-3d-hover' data-tour={title}>
				<CardBody>
					<div
						className={classNames(
							'ratio ratio-1x1',
							'rounded-2',
							`bg-l${darkModeStatus ? 'o25' : '10'}-${color}`,
							'mb-3',
						)}>
						<img
							src={image}
							alt=''
							width='100%'
							height='auto'
							className='object-fit-contain p-3'
						/>
					</div>
					<CardTitle>{title}</CardTitle>
					<p className='text-muted truncate-line-2'>{description}</p>
					<div className='row g-2'>
						{!!tags &&
							// eslint-disable-next-line react/prop-types
							tags.map((tag) => (
								<div key={tag.text} className='col-auto'>
									<Badge isLight color={tag.color} className='px-3 py-2'>
										{tag.text}
									</Badge>
								</div>
							))}
					</div>
				</CardBody>
			</Card>
		</>
	);
};
export default CourseLesson;
