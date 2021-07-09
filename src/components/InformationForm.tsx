import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup'
import { TxtError } from './Error'

export type inp = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
    age: number,
    number: number,
    city: string,
    country: string,
    zipCode: number,
    company: string,
    experienceInYears: number,
    companySite: string,
    Education: string,
}

export const InfoForm = () => {
    const initialValues: inp = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        age: 0,
        number: 0,
        Education: '',
        city: '',
        country: '',
        zipCode: 0,
        company: '',
        experienceInYears: 0,
        companySite: '',
    }

    const validation = yup.object({
        firstName: yup
            .string()
            .required('First Name is required'),

        lastName: yup
            .string()
            .required('Last Name is required'),

        email: yup
            .string()
            .email()
            .required(),

        password: yup
            .string()
            .required("Required")
            .max(20, "Password should be maximun of 20 characters")
            .min(6, "Password must be atleast of 6 characters"),


        confirmPassword: yup
            .string()
            .required("Required")
            .oneOf([yup.ref("password")], "Password is not matching"),

        age: yup
            .number()
            .required('Age is required')
            .min(18, "You must be at least 18 years")
            .max(60, "You must be at most 60 years"),
        number: yup
            .number()
            .optional(),

        education: yup
            .string()
            .required('education is required'),

        country: yup
            .string()
            .required('Country is required'),

        city: yup
            .string()
            .required('city is required'),

        zipCode: yup
            .number()
            .required(),

        company: yup
            .string()
            .optional(),

        experienceInYears: yup
            .number()
            .optional(),

        companySite: yup
            .string()
            .optional(),
    })

    const onSubmit = (values: inp, onSubmitProps: any) => {
        console.log(values);
        alert("From submitted Successfully");
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
    };
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validation}

            >
                <Form>
                    <label>First Name::</label>
                    <Field
                        name='firstName'
                        type='text'
                        label="firstName"
                    />
                    <ErrorMessage name="firstName" component={TxtError} />
                    < br />
                    <label>last Name::</label>
                    <Field
                        name='lastName'
                        type='text'
                        label="lastName"
                    />
                    <ErrorMessage name="lastName" component={TxtError} />
                    < br />

                    <label>Password</label>
                    <Field
                    name='password'
                    type='password'
                    label='password'
                    />
                    <ErrorMessage name='password' component={TxtError}  />
                    < br />

                    <label>Confirm Password</label>
                    <Field
                    name='confirmPassword'
                    type='password'
                    label='confirmPassword'
                    />
                    <ErrorMessage name='confirmPassword' component={TxtError}  />
                    < br />

                    <label>email ::</label>
                    <Field
                        name='email'
                        type='text'
                        label="email"
                    />
                    <ErrorMessage name="email" component={TxtError} />
                    < br />
                   
                    <label>Age::</label>
                    <Field
                        name='age'
                        type='text'
                        label="age"
                    />
                    <ErrorMessage name="age" component={TxtError} />
                    < br />

                    <label>number ::</label>
                    <Field
                        name='number'
                        type='number'
                        label="number"
                    />
                    <ErrorMessage name="number" component={TxtError} />
                    < br />

                    <label>education ::</label>
                    <Field
                        name='education'
                        type='text'
                        label="education"
                    />
                    <ErrorMessage name="education" component={TxtError} />
                    < br />

                    <label>country ::</label>
                    <Field
                        name='country'
                        type='text'
                        label="country"
                    />
                    <ErrorMessage name="country" component={TxtError} />
                    < br />

                    <label>city ::</label>
                    <Field
                        name='city'
                        type='text'
                        label="city"
                    />
                    <ErrorMessage name="city" component={TxtError} />
                    < br />


                    <label>zipCode ::</label>
                    <Field
                        name='zipCode'
                        type='number'
                        label="zipCode"
                    />
                    <ErrorMessage name="zipCode" component={TxtError} />
                    < br />


                    <label>company ::</label>
                    <Field
                        name='company'
                        type='text'
                        label="company"
                    />
                    <ErrorMessage name="company" component={TxtError} />
                    < br />



                    <label>experienceInYears ::</label>
                    <Field
                        name='experienceInYears'
                        type='number'
                        label="experienceInYears"
                    />
                    <ErrorMessage name="experienceInYears" component={TxtError} />
                    < br />

                    <label>Company Website ::</label>
                    <Field
                        name='companySite'
                        type='string'
                        label="companySite"
                    />
                    <ErrorMessage name="companySite" component={TxtError} />
                    < br />

                    <Field type='Submit' value='Submit' />
                </Form>

            </Formik>

        </div>
    )
}