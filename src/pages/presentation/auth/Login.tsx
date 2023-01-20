import React, {FC, useCallback, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Card, {CardBody} from '../../../components/bootstrap/Card';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import Button from '../../../components/bootstrap/Button';
import Logo from '../../../components/Logo';
import useDarkMode from '../../../hooks/useDarkMode';
import {useFormik} from 'formik';
import Spinner from '../../../components/bootstrap/Spinner';
import {useDispatch,} from "react-redux";
import {logInUser} from "../../../store/modules/user/asyncActions";
import SignUp from "./SignUp";
import SocialButtons from "./SocialButtons";

interface ILoginHeaderProps {
	isNewUser?: boolean;
}



const LoginHeader: FC<ILoginHeaderProps> = ({isNewUser}) => {
	if (isNewUser) {
		return (
			<>
				<div className='text-center h1 fw-bold mt-5'>Create Account,</div>
				<div className='text-center h4 text-muted mb-5'>Sign up to get started!</div>
			</>
		);
	}
	return (
		<>
			<div className='text-center h1 fw-bold mt-5'>Welcome,</div>
			<div className='text-center h4 text-muted mb-5'>Sign in to continue!</div>
		</>
	);
};

interface ILoginProps {
	isSignUp?: boolean;
}
const Login: FC<ILoginProps> = ({ isSignUp }) => {

	const dispatch:any = useDispatch();

	const loginAndRedirect = async (values) => {
		await dispatch(logInUser({
					email: values.loginUsername,
					password: values.loginPassword
				}));

		handleOnClick();

	}


	const { darkModeStatus } = useDarkMode();

	const [signInPassword, setSignInPassword] = useState<boolean>(false);
	const [singUpStatus, setSingUpStatus] = useState<boolean>(!!isSignUp);

	const navigate = useNavigate();
	const handleOnClick = useCallback(() => navigate('/'), [navigate]);



	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			loginUsername: '',
			loginPassword: '',
		},
		validate: (values) => {
			const errors: { loginUsername?: string; loginPassword?: string } = {};

			if (!values.loginUsername) {
				errors.loginUsername = 'Required';
			}

			if (!values.loginPassword) {
				errors.loginPassword = 'Required';
			}

			return errors;
		},
		validateOnChange: false,
		onSubmit: async (values) => {
			await loginAndRedirect(values)
		},
	});

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const handleContinue = () => {
		setIsLoading(true);
		setTimeout(() => {
			setSignInPassword(true);
			setIsLoading(false);
		}, 1000);
	};

	return (
		<PageWrapper
			isProtected={false}
			title={singUpStatus ? 'Sign Up' : 'Login'}
			className={classNames({ 'bg-dark': !singUpStatus, 'bg-light': singUpStatus })}>
			<Page className='p-0'>
				<div className='row h-100 align-items-center justify-content-center'>
					<div className='col-xl-4 col-lg-6 col-md-8 shadow-3d-container'>
						<Card className='shadow-3d-dark' data-tour='login-page'>
							<CardBody>
								<div className='text-center my-5'>
									<Link
										to='/'
										className={classNames(
											'text-decoration-none  fw-bold display-2',
											{
												'text-dark': !darkModeStatus,
												'text-light': darkModeStatus,
											},
										)}>
										<Logo width={200} />
									</Link>
								</div>
								<div
									className={classNames('rounded-3', {
										'bg-l10-dark': !darkModeStatus,
										'bg-dark': darkModeStatus,
									})}>
									<div className='row row-cols-2 g-3 pb-3 px-3 mt-0'>
										<div className='col'>
											<Button
												color={darkModeStatus ? 'light' : 'dark'}
												isLight={singUpStatus}
												className='rounded-1 w-100'
												size='lg'
												onClick={() => {
													setSignInPassword(false);
													setSingUpStatus(!singUpStatus);
												}}>
												Login
											</Button>
										</div>
										<div className='col'>
											<Button
												color={darkModeStatus ? 'light' : 'dark'}
												isLight={!singUpStatus}
												className='rounded-1 w-100'
												size='lg'
												onClick={() => {
													setSignInPassword(false);
													setSingUpStatus(!singUpStatus);
												}}>
												Sign Up
											</Button>
										</div>
									</div>
								</div>

								<LoginHeader isNewUser={singUpStatus} />
								{singUpStatus && <SignUp darkModeStatus={darkModeStatus}/>}
								{!singUpStatus && <form className='row g-4'>
									<>
										<div className='col-12'>
											<FormGroup
												id='loginUsername'
												isFloating
												label='Your email or username'
												className={classNames({
													'd-none': signInPassword,
												})}>
												<Input
													autoComplete='username'
													value={formik.values.loginUsername}
													isTouched={formik.touched.loginUsername}
													invalidFeedback={
														formik.errors.loginUsername
													}
													isValid={formik.isValid}
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
													onFocus={() => {
														formik.setErrors({});
													}}
												/>
											</FormGroup>
											{signInPassword && (
												<div className='text-center h4 mb-3 fw-bold'>
													Hi, {formik.values.loginUsername}.
												</div>
											)}
											<FormGroup
												id='loginPassword'
												isFloating
												label='Password'
												className={classNames({
													'd-none': !signInPassword,
												})}>
												<Input
													type='password'
													autoComplete='current-password'
													value={formik.values.loginPassword}
													isTouched={formik.touched.loginPassword}
													invalidFeedback={
														formik.errors.loginPassword
													}
													validFeedback='Looks good!'
													isValid={formik.isValid}
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
												/>
											</FormGroup>
										</div>
										<div className='col-12'>
											{!signInPassword ? (
												<Button
													color='warning'
													className='w-100 py-3'
													isDisable={!formik.values.loginUsername}
													onClick={handleContinue}>
													{isLoading && (
														<Spinner isSmall inButton isGrow />
													)}
													Continue
												</Button>
											) : (
												<Button
													color='warning'
													className='w-100 py-3'
													onClick={formik.handleSubmit}>
													Login
												</Button>
											)}
										</div>
									</>
									{/* BEGIN :: Social Login */}
									{!signInPassword && <SocialButtons darkModeStatus={darkModeStatus}/>}
									{/* END :: Social Login */}
								</form>}
							</CardBody>
						</Card>
						<div className='text-center'>
							<a
								href='/'
								className={classNames('text-decoration-none me-3', {
									'link-light': singUpStatus,
									'link-dark': !singUpStatus,
								})}>
								Privacy policy
							</a>
							<a
								href='/'
								className={classNames('link-light text-decoration-none', {
									'link-light': singUpStatus,
									'link-dark': !singUpStatus,
								})}>
								Terms of use
							</a>
						</div>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};
Login.propTypes = {
	isSignUp: PropTypes.bool,
};
Login.defaultProps = {
	isSignUp: false,
};

export default Login;
