import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import Button from '../../../components/bootstrap/Button';
import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import {
	emailValidation,
	passwordValidation,
} from '../../../helpers/validations/helper/validationFuncs';
import { IValues } from '../../../helpers/validations/helper/editPagesValidate';
import SocialButtons from './SocialButtons';
import { useDispatch } from 'react-redux';
import { logInUser } from '../../../store/modules/user/userActions';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../../components/bootstrap/Spinner';
import Toasts from '../../../components/bootstrap/Toasts';
import { useToasts } from 'react-toast-notifications';

const validate = (values: Partial<IValues>) => {
	const errors: IValues = {
		name: '',
		password: '',
	};

	emailValidation(values.email || '', 'email', errors);
	passwordValidation(
		values.password || '',
		values.password || '',
		'password',
		'password',
		errors,
	);
	return errors;
};
const LoginForm = () => {
	const dispatch: any = useDispatch();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validate,
		onSubmit: (event) => {},
	});
	const { addToast } = useToasts();

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
		const response = await dispatch(logInUser(values as any));
		if (response) {
			setIsLoading(false);
			localStorage.setItem('userU10', JSON.stringify(response));
			await navigate(`/`);
			return;
		}
		setIsLoading(false);
		addToast(
			<Toasts title='Incorrect data' icon='Error' iconColor='danger' isDismiss>
				Please, check e-mail and password
			</Toasts>,
			{
				autoDismiss: true,
			},
		);
		formik.setSubmitting(false);
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
					<Button
						type='submit'
						isDisable={isLoading}
						color='warning'
						className='w-100 py-3'>
						{isLoading && <Spinner isSmall inButton isGrow />}
						Continue
					</Button>
				</div>
				<SocialButtons />
			</form>
		</div>
	);
};

export default LoginForm;
