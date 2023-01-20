import React, {useContext} from 'react';
import {demoPagesMenu} from '../../../menu';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, {SubHeaderLeft} from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import ThemeContext from '../../../contexts/themeContext';
import Card, {CardBody, CardHeader, CardLabel, CardSubTitle, CardTitle} from "../../../components/bootstrap/Card";
import Avatar from "../../../components/Avatar";
import USERS from "../../../common/data/userDummyData";
import Input from "../../../components/bootstrap/forms/Input";
import Button from "../../../components/bootstrap/Button";
import FormGroup from "../../../components/bootstrap/forms/FormGroup";
import {useFormik} from "formik";
import validate from "../demo-pages/helper/editPagesValidate";

const DashboardPage = () => {
	const formik: any = useFormik({
		initialValues: {
			name: '', // +
			second_name: '', // +
			email: '', // +
			phone: '',
			telegram: '',
			country: '',
			city: '',
			gender: '',
			language: '',
			password: '',
			password_confirmation: '',
			
			image: '',
		},
		validate,
		onSubmit: () => {

		},
	});


	return (
		<PageWrapper title={demoPagesMenu.sales.subMenu.dashboard.text}>
			<SubHeader>
				<SubHeaderLeft>
					<span className='h4 mb-0 fw-bold'>Profile</span>
				</SubHeaderLeft>
			</SubHeader>
			<Page container='fluid'>
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
						</div>
					</CardBody>
				</Card>
			</Page>
		</PageWrapper>
	);
};

export default DashboardPage;
