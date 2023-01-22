import React, { FC, useCallback, useState } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Card, { CardBody, CardTitle } from '../../../components/bootstrap/Card';
import Badge from '../../../components/bootstrap/Badge';

import data, { TTags } from './helper/dummyKnowledgeData';
import { demoPagesMenu } from '../../../menu';
import useDarkMode from '../../../hooks/useDarkMode';
import { TColor } from '../../../type/color-type';

interface IItemProps {
	id: string | number;
	image: string;
	title: string;
	description: string;
	tags: TTags[];
	color: TColor;
}
const Item: FC<IItemProps> = ({ id, image, title, description, tags, color }) => {
	const { darkModeStatus } = useDarkMode();

	const navigate = useNavigate();
	const handleOnClick = useCallback(
		() => navigate(`../${demoPagesMenu.knowledge.subMenu.itemID.path}/${id}`),
		[navigate, id],
	);
	return (
		<Card
			className='cursor-pointer shadow-3d-primary shadow-3d-hover'
			onClick={handleOnClick}>

			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, consequatur cum cupiditate ea eveniet impedit magnam minima mollitia neque non, nostrum odit officia tenetur, ut velit? Ad commodi ipsam vero?
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
	);
};

const KnowledgeGridPage = () => {

	const [filterableData] = useState(data);

	return (
		<PageWrapper title={demoPagesMenu.knowledge.subMenu.grid.text}>
			<Page>
				<div className='row'>
				</div>
				<div className='row mb-5'>
					{filterableData.map((item) => (
						<div key={item.id} className='col-xl-3 col-lg-4 col-md-6'>
							{/* eslint-disable-next-line react/jsx-props-no-spreading */}
							<Item {...item} />
						</div>
					))}
				</div>
			</Page>
		</PageWrapper>
	);
};

export default KnowledgeGridPage;
