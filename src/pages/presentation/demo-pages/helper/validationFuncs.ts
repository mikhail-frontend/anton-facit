import type {IValues} from './editPagesValidate'

export const simpleStringValidation = (value: string, key: keyof IValues, errors: IValues) => {
    if (!value) {
        errors[key] = 'Required';
    } else if (value.length < 3) {
        errors[key] = 'Must be 3 characters or more';
    } else if (value.length > 20) {
        errors[key] = 'Must be 20 characters or less';
    }
};

export const emailValidation = (value: string, key: keyof IValues, errors: IValues) => {
    if (!value) {
        errors[key] = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors[key] = 'Invalid email address';
    }
};

export const telegramValidation = (value: string, key: keyof IValues, errors: IValues) => {
    if (!value) {
        errors[key] = 'Required';
    } else if (!value.match(/^https?:\/\/.*/gm)) {
        errors[key] = 'Invalid URL';
    } else if (!value.includes('https://t.me/')) {
        errors[key] = 'Invalid Telegram';
    }
};

export const phoneValidation = (value: string, key: keyof IValues, errors: IValues) => {
    if (!value || (value.trim() === '+1 (___) ___-____')) {
        errors[key] = 'Required';
    } else if (value.length !== 17) {
        errors[key] = 'Invalid phone length';
    }
}

export const passwordValidation = (password: string, password_confirmation: string, passKey: keyof IValues, confirmKey: keyof IValues, errors: IValues) => {

    if (!password) {
        errors[passKey] = 'Please provide a valid password.';
    } else {
        errors[passKey] = '';

        if (password.length < 8 || password.length > 32) {
            errors[passKey] +=
                'The password must be at least 8 characters long, but no more than 32. ';
        }
        if (!/[0-9]/g.test(password)) {
            errors[passKey] +=
                'Require that at least one digit appear anywhere in the string. ';
        }
        if (!/[a-z]/g.test(password)) {
            errors[passKey] +=
                'Require that at least one lowercase letter appear anywhere in the string. ';
        }
        if (!/[A-Z]/g.test(password)) {
            errors[passKey] +=
                'Require that at least one uppercase letter appear anywhere in the string. ';
        }

        // if (!/[!@#$%^&*)(+=._-]+$/g.test(password)) {
        //     errors[passKey] +=
        //         'Require that at least one special character appear anywhere in the string. ';
        // }
    }

    if (!password_confirmation) {
        errors[confirmKey] = 'Please provide a valid password.';
    } else if (password !== password_confirmation) {
        errors[confirmKey] = 'Passwords do not match.';
    }

}