

// 	country: '',
// 	city: '',
// 	gender: '',
// 	language: '',
// 	password: '',
// 	password_confirmation: ''

// 	phone: '',



interface IValues {

	image?: string;
	name?: string;
	second_name?: string;
	email?: string;
	telegram?: string;
	country?: string;
	city?: string;
	gender?: string;
	language?: string;
	password?: string;
	password_confirmation?: string;
	phone?: string;

	firstName?: string;
	lastName?: string;
	displayName?: string;
	emailAddress?: string;
	currentPassword?: string;
	newPassword?: string;
	confirmPassword?: string;
}

const simpleStringValidation = (value:string, key:keyof IValues, errors:IValues) => {
	if (!value) {
		errors[key] = 'Required';
	} else if (value.length < 3) {
		errors[key] = 'Must be 3 characters or more';
	} else if (value.length > 20) {
		errors[key] = 'Must be 20 characters or less';
	}
};

const emailValidation = (value:string, key:keyof IValues, errors:IValues) => {
	if (!value) {
		errors[key] = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
		errors[key] = 'Invalid email address';
	}
};

const urlValidation =  (v:string, key:keyof IValues, errors:IValues) => {
	const value = v || '';
	if (!value) {
		errors[key] = 'Required';
	} else if(!value.match(/^https?:\/\/.*/gm)) {
		errors[key] = 'Invalid URL';
	}
};
const phoneValidation = (value:string, key:keyof IValues, errors:IValues) => {
	if (!value) {
		errors[key] = 'Required';
	} else if (value.length !== 17) {
		errors[key] = 'Invalid phone length';
	}
}
const validate = (values: IValues) => {


	const errors: IValues = {
		image: '',
		name: '',
		second_name: '',
		email: '',
		telegram: '',
		country: '',
		city: '',
		gender: '',
		language: '',
		password: '',
		password_confirmation: '',
		phone: '',


		firstName: '',
		lastName: '',
		displayName: '',
		emailAddress: '',
		currentPassword: '',
		newPassword: '',
		confirmPassword: '',



	};

	simpleStringValidation(values.firstName || '', 'firstName', errors);
	simpleStringValidation(values.name || '', 'name', errors);
	simpleStringValidation(values.second_name || '', 'second_name', errors);
	simpleStringValidation(values.lastName || '', 'lastName', errors);
	emailValidation(values.emailAddress || '', 'emailAddress', errors);
	emailValidation(values.email || '', 'email', errors);
	urlValidation(values.telegram || '', 'telegram', errors);
	phoneValidation(values.phone || '', 'phone', errors)


	if (values.currentPassword) {
		if (!values.newPassword) {
			errors.newPassword = 'Please provide a valid password.';
		} else {
			errors.newPassword = '';

			if (values.newPassword.length < 8 || values.newPassword.length > 32) {
				errors.newPassword +=
					'The password must be at least 8 characters long, but no more than 32. ';
			}
			if (!/[0-9]/g.test(values.newPassword)) {
				errors.newPassword +=
					'Require that at least one digit appear anywhere in the string. ';
			}
			if (!/[a-z]/g.test(values.newPassword)) {
				errors.newPassword +=
					'Require that at least one lowercase letter appear anywhere in the string. ';
			}
			if (!/[A-Z]/g.test(values.newPassword)) {
				errors.newPassword +=
					'Require that at least one uppercase letter appear anywhere in the string. ';
			}
			if (!/[!@#$%^&*)(+=._-]+$/g.test(values.newPassword)) {
				errors.newPassword +=
					'Require that at least one special character appear anywhere in the string. ';
			}
		}

		if (!values.confirmPassword) {
			errors.confirmPassword = 'Please provide a valid password.';
		} else if (values.newPassword !== values.confirmPassword) {
			errors.confirmPassword = 'Passwords do not match.';
		}
	}

	if (!values.displayName) {
		errors.displayName = 'Required';
	} else if (values.displayName.length > 30) {
		errors.displayName = 'Must be 20 characters or less';
	}
	return errors;
};

export default validate;
