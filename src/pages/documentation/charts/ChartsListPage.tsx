import React from 'react';
import { useFormik } from 'formik';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';

import Icon from '../../../components/icon/Icon';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Input from '../../../components/bootstrap/forms/Input';
import CommonStoryBtn from '../../../common/other/CommonStoryBtn';

const ChartsListPage = () => {
	const formik = useFormik({
		initialValues: {
			searchInput: '',
		},
		onSubmit: () => {},
	});

	return (
		<PageWrapper title='No title'>
			<SubHeader>
				<SubHeaderLeft>
					<label
						className='border-0 bg-transparent cursor-pointer me-0'
						htmlFor='searchInput'>
						<Icon icon='Search' size='2x' color='primary' />
					</label>
					<Input
						id='searchInput'
						type='search'
						className='border-0 shadow-none bg-transparent'
						placeholder='Search...'
						onChange={formik.handleChange}
						value={formik.values.searchInput}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/docs/' />
				</SubHeaderRight>
			</SubHeader>
			<Page>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur corporis
				ducimus ex hic impedit ipsam pariatur, perferendis placeat qui quidem, repellat,
				repellendus repudiandae sunt suscipit tempore temporibus tenetur ullam veniam.
			</Page>
		</PageWrapper>
	);
};

export default ChartsListPage;
