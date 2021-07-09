import { useFormik } from 'formik'
import * as yup from 'yup'
export const Form = () => {

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            age: 0,
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: yup.object({
            firstname:yup.string().required('First Name is Required.'),

            lastname:yup.string().required('Last Name is Required.'),
            
            age:yup.number().required('Age is Required.'),
            
            email:yup.string().email().required('Email is Required.'),
            
            password:yup.string()
            .min(6,'Password Too Short')
            .max(10,'Password Too Long')
            .required('Password is Required.'),
        })
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <table style={{ margin: '0 auto' }}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td> <label>First Name</label> </td>
                            <td> <input
                                type='text'
                                name='firstname'
                                onChange={formik.handleChange}
                                value={formik.values.firstname}
                            /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td style={{ textAlign: 'left' }} >
                                {formik.errors.firstname ? <div style={{ fontSize: '15px', color: 'red' }}>{formik.errors.firstname}</div> : ""}
                            </td>
                        </tr>
                        <tr>
                            <td> <label> Last name</label> </td>
                            <td> <input type='text'
                                name='lastname'
                                onChange={formik.handleChange}
                                value={formik.values.lastname}
                            /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td style={{ textAlign: 'left' }}>
                                {formik.errors.lastname ? <div style={{ fontSize: '15px', color: 'red' }}>{formik.errors.lastname}</div> : ""}
                            </td>
                        </tr>
                        <tr>
                            <td> <label>Age</label> </td>
                            <td><input type='number'
                                name='age'
                                onChange={formik.handleChange}
                                value={formik.values.age}
                            /> </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td style={{ textAlign: 'left' }}>
                                {formik.errors.age ? <div style={{ fontSize: '15px', color: 'red' }}>{formik.errors.age}</div> : ""}
                            </td>
                        </tr>
                        <tr>
                            <td> <label>Email</label> </td>
                            <td> <input type='emial'
                                name='email'
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td style={{ textAlign: 'left' }}>
                                {formik.errors.email ? <div style={{ fontSize: '15px', color: 'red' }}>{formik.errors.email}</div> : ""}
                            </td>
                        </tr>
                        <tr>
                            <td> <label>Password</label> </td>
                            <td> <input type='password'
                                name='password'
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            /> </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td style={{ textAlign: 'left' }}>
                                {formik.errors.password ? <div style={{ fontSize: '15px', color: 'red' }}>{formik.errors.password}</div> : ""}
                            </td>
                        </tr>
                        <tr >
                            <td></td>
                            <td style={{ textAlign: 'left' }}><input
                                style={{ width: "100%", height: '2em', border: 'outset 1px black', borderRadius: '5px' }}
                                type="submit" value='Submit' /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}