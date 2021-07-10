import * as yup from 'yup'

export const PersonalInformationvalidation = yup.object({
    firstName: yup
        .string()
        .required('First Name is required'),

    lastName: yup
        .string()
        .required('Last Name is required'),


    age: yup
        .number()
        .required('Age is required')
        .min(18, "You must be at least 18 years")
        .max(60, "You must be at most 60 years"),
    number: yup
        .number()
        .optional(),

})


export const AddressFormValidation = yup.object({
    country: yup
        .string()
        .required('Country is required'),

    city: yup
        .string()
        .required('city is required'),

    address: yup
        .string()
        .required('Address is requires'),

    zipCode: yup
        .number()
        .required('Zip is requires'),

    street: yup
        .string()
        .required('required')
})


export const AcountInfoFormValidation = yup.object({

    username: yup
        .string()
        .required('username is required'),

    email: yup
        .string()
        .email()
        .required('enter a vaild email'),

    password: yup
        .string()
        .required("Required")
        .max(20, "Password should be maximun of 20 characters")
        .min(6, "Password must be atleast of 6 characters"),


    confirmPassword: yup
        .string()
        .required("Required")
        .oneOf([yup.ref("password")], "Password is not matching"),
})