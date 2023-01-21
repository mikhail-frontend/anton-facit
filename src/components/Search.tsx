import React, { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import Icon from './icon/Icon';
import Input from './bootstrap/forms/Input';

const Search = () => {
	const refSearchInput = useRef<HTMLInputElement>(null);
	const [, setSearchModalStatus] = useState(false);
	const formik = useFormik({
		initialValues: {
			searchInput: '',
		},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		onSubmit: (values) => {
			setSearchModalStatus(true);
		},
	});

	useEffect(() => {
		if (formik.values.searchInput) {
			setSearchModalStatus(true);
			refSearchInput?.current?.focus();
		}
		return () => {
			setSearchModalStatus(false);
		};
	}, [formik.values.searchInput]);

	return (
		<>
			<div className='d-flex' data-tour='search'>
				<label className='border-0 bg-transparent cursor-pointer' htmlFor='searchInput'>
					<Icon icon='Search' size='2x' color='primary' />
				</label>
				<Input
					id='searchInput'
					type='search'
					className='border-0 shadow-none bg-transparent'
					placeholder='Search...'
					onChange={formik.handleChange}
					value={formik.values.searchInput}
					autoComplete='off'
				/>
			</div>
		</>
	);
};

export default Search;
