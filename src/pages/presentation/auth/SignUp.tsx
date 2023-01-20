import FormGroup from "../../../components/bootstrap/forms/FormGroup";
import Input from "../../../components/bootstrap/forms/Input";
import Button from "../../../components/bootstrap/Button";
import React, {useRef} from "react";
import {useFormik} from "formik";
import {
    emailValidation, passwordValidation,
    simpleStringValidation,
} from "../demo-pages/helper/validationFuncs";
import {IValues} from "../demo-pages/helper/editPagesValidate";
import SocialButtons from "./SocialButtons";
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
    passwordValidation(values.password || '', values.password || '', 'password', 'password', errors)
    return errors;
};
// @ts-ignore
const SignUp = ({darkModeStatus}) => {
    // @ts-ignore
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            second_name: '',
            password: '',
            password_confirmation: ''
        },
        validate,
        onSubmit: (event) => {
        },
    });
    const formRef = useRef<HTMLFormElement>(null);

    return (
        <div>
            <form noValidate onSubmit={formik.handleSubmit} ref={formRef}>
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
                    <Button
                        color='info'
                        type='submit'
                        className='w-100 py-3'
                    >
                        Sign Up
                    </Button>
                </div>
                <SocialButtons darkModeStatus={darkModeStatus}/>
            </form>
        </div>
    )

}

export default SignUp;