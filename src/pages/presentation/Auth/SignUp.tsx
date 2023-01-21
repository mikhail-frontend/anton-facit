import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import Button from '../../../components/bootstrap/Button';
import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import {
	emailValidation,
	passwordValidation,
	simpleStringValidation,
} from '../../../helpers/validations/helper/validationFuncs';
import { IValues } from '../../../helpers/validations/helper/editPagesValidate';
import SocialButtons from './SocialButtons';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../../store/modules/user/userActions';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../../components/bootstrap/Spinner';

const validate = (values: Partial<IValues>) => {
	const errors: IValues = {
		name: '',
		second_name: '',
		email: '',
		password: '',
	};

	simpleStringValidation(values.name || '', 'name', errors);
	simpleStringValidation(values.second_name || '', 'second_name', errors);
	emailValidation(values.email || '', 'email', errors);
	passwordValidation(
		values.password || '',
		values.password_confirmation || '',
		'password',
		'password_confirmation',
		errors,
	);
	return errors;
};
const SignUp = () => {
	const dispatch: any = useDispatch();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const formik = useFormik({
		initialValues: {
			email: '',
			name: '',
			second_name: '',
			password: '',
			password_confirmation: '',
		},
		validate,
		onSubmit: (event) => {},
	});

	const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const result = await formik.validateForm();
		await formik.submitForm();
		const { values } = formik;
		//@ts-ignore
		const isValid = !Object.values(result).some((val: string) => val && val.length);
		if (!isValid) return;
		// @ts-ignore
		formik.setTouched(false);
		setIsLoading(true);
		// eslint-disable-next-line
		const { password_confirmation, ...rest } = values;
		await dispatch(signUpUser(rest as any));
		setIsLoading(false);
		localStorage.setItem('userU10', JSON.stringify(values));
		await navigate(`/`);
	};
	const formRef = useRef<HTMLFormElement>(null);

	return (
		<div>
			<form noValidate onSubmit={submitHandler} ref={formRef}>
				<div className='mb-4 col-12'>
					<FormGroup id='email' isFloating label='Your email'>
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
				<div className='mb-4 col-12'>
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

				<div className='mb-4 col-12'>
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

				<div className='mb-4 col-12'>
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
				<div className='mb-4 col-12'>
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
				<div className='mb-4 col-12'>
					<Button color='info' type='submit' className='w-100 py-3'>
						{isLoading && <Spinner isSmall inButton isGrow />}
						Sign Up
					</Button>
				</div>
				<SocialButtons />
			</form>
		</div>
	);
};

export default SignUp;
