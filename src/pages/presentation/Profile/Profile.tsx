import React, { useMemo, useRef, useEffect } from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Input from '../../../components/bootstrap/forms/Input';
import Button from '../../../components/bootstrap/Button';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import { useFormik } from 'formik';
import validate, { IValues } from '../../../helpers/validations/helper/editPagesValidate';
import Select from '../../../components/bootstrap/forms/Select';
import classNames from 'classnames';
import useDarkMode from '../../../hooks/useDarkMode';
import { useToasts } from 'react-toast-notifications';
import countryList from 'react-select-country-list';
import Toasts from '../../../components/bootstrap/Toasts';
import Dropzone from './components/Dropzone';
import ChangeLang from '../../_layout/_headers/ChangeLang';
import { genders } from './entities';
import Progress from '../../../components/bootstrap/Progress';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const Profile = () => {
	const user = useSelector((state: any) => state.user);
	const userData: IValues = user.userData;

	const {
		i18n: { language },
	} = useTranslation();
	const { darkModeStatus } = useDarkMode();
	const { addToast } = useToasts();

	const countriesList = useMemo(
		() =>
			countryList()
				.getData()
				.map((item: any) => ({
					text: item.label,
					value: item.value,
				})),
		[],
	);
	const gendersList = useMemo(() => genders, []);

	const formRef = useRef<HTMLFormElement>(null);

	//eslint-disable-next-line
	useEffect(() => {
		(() => {
			formik.setValues({
				...userData,
				language,
			});
		})();
		//eslint-disable-next-line
	}, [userData]);

	const formik = useFormik({
		initialValues: { ...userData, language },
		validate,
		onSubmit: (event) => {},
	});

	const percentFilling = useMemo(() => {
		const filledValues = Object.values(formik.values).filter(
			(val: string) => val && val.length,
		);
		const allValues = Object.values(formik.values);
		return (filledValues.length / allValues.length) * 100;
	}, [formik.values]);

	const savePhoto = (image: string) => {
		formik.setValues({
			...formik.values,
			image
		})
	};

	const deletePhoto = () => {
		formik.setValues({
			...formik.values,
			image: ''
		})
	};

	const submitHandler = async (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		const result = await formik.validateForm();
		await formik.submitForm();
		const { initialValues: availableValues } = formik;
		const availableErrors = Object.entries(result).reduce(
			(acc: any, [key, value]: [string, string]) => {
				if (availableValues.hasOwnProperty(key)) {
					acc[key] = value;
				}
				return acc;
			},
			{},
		);
		//@ts-ignore
		const isValid = !Object.values(availableErrors).some((val: string) => !!val);
		if (!isValid) {
			addToast(
				<Toasts title='Validation error' icon='Error' iconColor='danger' isDismiss>
					Please, feel all required fields
				</Toasts>,
				{
					autoDismiss: true,
				},
			);
			formik.setSubmitting(false);
			return;
		}

		addToast(
			<Toasts title='Congrats' icon='Person' iconColor='success' isDismiss>
				Your changes is saved
			</Toasts>,
			{
				autoDismiss: true,
			},
		);

		setTimeout(() => {
			// @ts-ignore
			formik.setTouched(false);
		}, 1500);
	};

	return (
		<PageWrapper title={'Profile page'}>
			<SubHeader>
				<Progress
					value={percentFilling}
					isAutoColor
					height={10}
					style={{ marginBottom: '20px', padding: 0 }}
				/>
				<SubHeaderLeft>
					<span className='h4 mb-0 fw-bold'>Profile</span>
				</SubHeaderLeft>
				<SubHeaderRight>
					<Button
						className='px-5 py-3'
						color='primary'
						isLight
						icon='Save'
						style={{ marginBottom: '20px' }}
						onClick={(event) => submitHandler(event as React.MouseEvent<HTMLElement>)}>
						Save changes
					</Button>
				</SubHeaderRight>
			</SubHeader>
			<Page container='fluid'>
				<form className='row g-4' noValidate onSubmit={formik.handleSubmit} ref={formRef}>
					<Card>
						<CardHeader>
							<CardLabel icon='Person' iconColor='success'>
								<CardTitle>Your photo</CardTitle>
								<CardSubTitle>It helps other users recognize you </CardSubTitle>
							</CardLabel>
						</CardHeader>
						<CardBody>
							<div className='col-12'>
								<Dropzone
									photo={formik.values.image}
									savePhoto={savePhoto}
									deletePhoto={deletePhoto}
								/>
							</div>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>
							<CardLabel icon='Person' iconColor='success' style={{ flex: 1 }}>
								<CardTitle>Personal Information</CardTitle>
								<CardSubTitle>User's credentials</CardSubTitle>
							</CardLabel>
							<div className='col-md-6 d-flex justify-content-end'>
								<ChangeLang />
							</div>
						</CardHeader>
						<CardBody>
							<div className='row g-4'>
								<div className='col-md-6'>
									<FormGroup id='name' label='First Name' isFloating>
										<Input
											placeholder='First Name'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.name}
											isValid={formik.isValid}
											isTouched={formik.touched.name}
											invalidFeedback={formik.errors.name}
											validFeedback='Looks good!'
										/>
									</FormGroup>
								</div>
								<div className='col-md-6'>
									<FormGroup id='second_name' label='Last Name' isFloating>
										<Input
											placeholder='Last Name'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.second_name}
											isValid={formik.isValid}
											isTouched={formik.touched.second_name}
											invalidFeedback={formik.errors.second_name}
											validFeedback='Looks good!'
										/>
									</FormGroup>
								</div>
								<div className='col-md-6'>
									<FormGroup id='email' label='E-mail' isFloating>
										<Input
											placeholder='E-mail'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.email}
											isValid={formik.isValid}
											isTouched={formik.touched.email}
											invalidFeedback={formik.errors.email}
											validFeedback='Looks good!'
										/>
									</FormGroup>
								</div>

								<div className='col-md-6'>
									<FormGroup id='phone' label='Phone' isFloating>
										<Input
											placeholder='Phone number'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.phone}
											isValid={formik.isValid}
											isTouched={formik.touched.phone}
											invalidFeedback={formik.errors.phone}
											validFeedback='Looks good!'
											mask='+1 (999) 999-9999'
										/>
									</FormGroup>
								</div>
								<div className='col-md-6'>
									<FormGroup id='telegram' label='Telegram' isFloating>
										<Input
											placeholder='Telegram'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.telegram}
											isValid={formik.isValid}
											isTouched={formik.touched.telegram}
											invalidFeedback={formik.errors.telegram}
											validFeedback='Looks good!'
										/>
									</FormGroup>
								</div>
								<div className='col-md-6'>
									<Select
										id='country'
										ariaLabel='country'
										placeholder='Select your country'
										size='lg'
										list={countriesList}
										className={classNames('rounded-1', {
											'bg-white': !darkModeStatus,
										})}
										validFeedback='Looks good!'
										onChange={(e: { target: { value: any } }) => {
											formik.handleChange(e);
										}}
										value={formik.values.country}
									/>
								</div>

								<div className='col-md-6'>
									<FormGroup id='city' label='City' isFloating>
										<Input
											placeholder='Your city'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.city}
											isValid={formik.isValid}
											isTouched={formik.touched.city}
											invalidFeedback={formik.errors.city}
										/>
									</FormGroup>
								</div>

								<div className='col-md-6'>
									<Select
										id='gender'
										ariaLabel='gender'
										placeholder='Select your gender'
										size='lg'
										list={gendersList}
										className={classNames('rounded-1', {
											'bg-white': !darkModeStatus,
										})}
										validFeedback='Looks good!'
										onChange={(e: { target: { value: any } }) => {
											formik.handleChange(e);
										}}
										value={formik.values.gender}
									/>
								</div>
							</div>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardLabel icon='Settings' iconColor='success'>
								<CardTitle>Password Settings</CardTitle>
							</CardLabel>
						</CardHeader>
						<CardBody>
							<div className='row g-4'>
								<div className='col-md-6'>
									<FormGroup id='password' label='Password' isFloating>
										<Input
											placeholder='Password'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.password}
											isValid={formik.isValid}
											isTouched={formik.touched.password}
											invalidFeedback={formik.errors.password}
											validFeedback='Looks good!'
											type='password'
										/>
									</FormGroup>
								</div>
								<div className='col-md-6'>
									<FormGroup
										id='password_confirmation'
										label='Password confirmation'
										isFloating>
										<Input
											placeholder='Password confirmation'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.password_confirmation}
											isValid={formik.isValid}
											isTouched={formik.touched.password_confirmation}
											invalidFeedback={formik.errors.password_confirmation}
											validFeedback='Looks good!'
											type='password'
										/>
									</FormGroup>
								</div>
							</div>
						</CardBody>
					</Card>
				</form>
			</Page>
		</PageWrapper>
	);
};

export default Profile;
