import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useFormik} from 'formik';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';

import Icon from '../../../components/icon/Icon';
import useDarkMode from '../../../hooks/useDarkMode';
import SubHeader, {SubHeaderLeft, SubHeaderRight} from '../../../layout/SubHeader/SubHeader';
import Input from '../../../components/bootstrap/forms/Input';
import CommonStoryBtn from '../../../common/other/CommonStoryBtn';

const FormsListPage = () => {
	const { darkModeStatus } = useDarkMode();


	const navigate = useNavigate();

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
						<Icon icon='Search' size='2x' color='primary'/>
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
					<CommonStoryBtn to='/docs/'/>
				</SubHeaderRight>
			</SubHeader>
			<Page>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aliquam at atque consectetur
				deleniti ducimus eligendi enim explicabo incidunt ipsa magnam obcaecati, quos rem, sunt velit veritatis
				voluptatibus voluptatum?
			</Page>
		</PageWrapper>
	);
};

export default FormsListPage;
