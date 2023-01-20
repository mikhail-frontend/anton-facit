import React, {useMemo, useRef} from 'react';
import {demoPagesMenu} from '../../../menu';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, {SubHeaderLeft, SubHeaderRight} from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import Card, {CardBody, CardHeader, CardLabel, CardSubTitle, CardTitle} from "../../../components/bootstrap/Card";
import Avatar from "../../../components/Avatar";
import USERS from "../../../common/data/userDummyData";
import Input from "../../../components/bootstrap/forms/Input";
import Button from "../../../components/bootstrap/Button";
import FormGroup from "../../../components/bootstrap/forms/FormGroup";
import {useFormik} from "formik";
import validate from "../demo-pages/helper/editPagesValidate";
import Select from "../../../components/bootstrap/forms/Select";
import classNames from "classnames";
import useDarkMode from "../../../hooks/useDarkMode";
import {  useToasts } from 'react-toast-notifications';

// @ts-ignore
import countryList from 'react-select-country-list';
import {fullData, emptyData} from "./helpers/formData";


const DashboardPage = () => {
	const {darkModeStatus} = useDarkMode();
	const countriesList = useMemo(() => countryList().getData().map((item: any) => ({
		text: item.label,
		value: item.value
	})), []);
	const gendersList = useMemo(() => ([
		{
			text: 'Male',
			value: 'male'
		},
		{
			text: 'Female',
			value: 'female'
		},
		{
			text: 'Non binary',
			value: 'non-binary'
		},
		{
			text: `Don't want to talk`,
			value: 'other'
		},

	]), []);

	const formRef = useRef<HTMLFormElement>(null);

	const formik = useFormik({
		initialValues: fullData,
		validate,
		onSubmit: (event) => {},
	});

	const { addToast } = useToasts();

	const submitClickHandler = () => {
		const  result = formik.submitForm();
		const isValid = formik.validateForm();
		isValid.then((value) => {
			console.log({value})
		})
		const dirty = true
		console.log({
			isValid
		})
		if(dirty) {
			// logic to dirty;
			console.log(1)
			return
		}
		console.log(233)
		formik.setSubmitting(false);
		setTimeout(() => {
			// @ts-ignore
			formik.setTouched(false)
		}, 1500)


		// (formik as any).setIsTouched(false)
		console.log({formik, result})
	}


	return (
		<PageWrapper title={demoPagesMenu.sales.subMenu.dashboard.text}>
			<SubHeader>
				<SubHeaderLeft>
					<span className='h4 mb-0 fw-bold'>Profile</span>
				</SubHeaderLeft>
				<SubHeaderRight>
					<Button
						className='px-5 py-3'
						color='primary'
						isLight
						icon='Save'
						onClick={() => submitClickHandler()}
					>
						Save changes
					</Button>
				</SubHeaderRight>
			</SubHeader>
			<Page container='fluid'>
				<form className='row g-4' noValidate onSubmit={formik.handleSubmit} ref={formRef}>

					<Card>
						<CardBody>
							<div className='col-12'>
								<div className='row g-4 align-items-center'>
									<div className='col-lg-auto'>
										<Avatar
											srcSet={USERS.JOHN.srcSet}
											src={USERS.JOHN.src}
											color={USERS.JOHN.color}
											rounded={3}
										/>
									</div>
									<div className='col-lg'>
										<div className='row g-4'>
											<div className='col-auto'>
												<Input type='file' autoComplete='photo'/>
											</div>
											<div className='col-auto'>
												<Button color='dark' isLight icon='Delete'>
													Delete Avatar
												</Button>
											</div>
											<div className='col-12'>
												<p className='lead text-muted'>
													Avatar helps your teammates get to know you.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>
							<CardLabel icon='Person' iconColor='success'>
								<CardTitle>Personal Information</CardTitle>
								<CardSubTitle>User's credentials</CardSubTitle>
							</CardLabel>
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
											console.log(e.target.value)
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
											console.log(e.target.value)
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
									<FormGroup id='password_confirmation' label='Password confirmation' isFloating>
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

export default DashboardPage;
