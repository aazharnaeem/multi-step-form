import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { AddressType, Props } from '../../Types'
import { ErrorText } from '../ErrorText'
import { AddressFormValidation } from '../../validationSchema'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid, Button } from '@material-ui/core'
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: '0 auto',
            flexGrow: 1,
        },
    }),
);


const initialValues: AddressType = {
    country: '',
    city: '',
    address: '',
    zipCode: 0,
    street: '',
}
export const AddressForm: React.FC<Props> = (
    {
        submit,
        setFormValues,
        prevValues,
    }
) => {
    const classes = useStyles();
    return (
        <Formik

            initialValues={initialValues}
            onSubmit={(values: AddressType) => {
                setFormValues({ ...values, ...prevValues });
                submit(2);
            }}
            validationSchema={AddressFormValidation}
        >
            <div
                style={{ marginBottom: '50px' }}
            >
                <h1
                    style={{ fontFamily: 'sans-serif' }}

                >ADDRESS INFORMATION</h1>

                <Form>
                    <Grid container justify={'center'} spacing={3} >
                        <Grid xs={4}>
                            <Field
                                name='country'
                                type='text'
                                as={TextField}
                                id='standard-basic'
                                label='country'
                                helperText={
                                    <ErrorMessage name="country" component={ErrorText} />
                                }
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={4}>
                            <Field
                                name='city'
                                type='text'
                                as={TextField}
                                id='standard-basic'
                                label='city'
                                helperText={<ErrorMessage name='city' component={ErrorText} />}
                                fullWidth
                            />
                        </Grid>

                        <Grid xs={8}>
                            <Field
                                name='address'
                                type='text'
                                as={TextField}
                                id='standard-basic'
                                label='address'
                                helperText={<ErrorMessage name='address' component={ErrorText} />}
                                fullWidth
                            />

                        </Grid>
                        <Grid xs={12}>
                            <Field
                                name='zipCode'
                                type='number'
                                as={TextField}
                                id='standard-number'
                                label='zipCode'
                                helperText={<ErrorMessage name='zipCode' component={ErrorText} />}
                            />
                        </Grid>
                        <Grid xs={8}>

                            <Field
                                name='street'
                                type='text'
                                as={TextField}
                                id='standard-basic'
                                label='street'
                                helperText={<ErrorMessage name='street' component={ErrorText} />}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <div className="buttons">
                        <Button variant="contained" color="primary" onClick={() => submit(2)}>      Back          </Button>
                        <Button variant="contained" color="primary" type="submit">                  Next          </Button>
                    </div>
                </Form>
            </div>
        </Formik>
    )
}