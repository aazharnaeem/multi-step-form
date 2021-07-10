import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { PersonalInformation , Props} from '../../Types'
import { ErrorText } from '../ErrorText'
import { PersonalInformationvalidation } from '../../validationSchema'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: '0 auto',
            flexGrow: 1,
        },
    }),
);


const initialValues: PersonalInformation = {
    firstName: '',
    lastName: '',
    age: 0,
    number: 0,
}

export const PersonalInformationForm: React.FC<Props> = (
    {
        submit,
        setFormValues,
        prevValues,
    }
) => {
    const classes = useStyles();
    return (
        <Formik

            className={classes.root}
            initialValues={initialValues}
            onSubmit={(values: PersonalInformation) => {
                setFormValues({ ...values, ...prevValues });
                submit(1);
            }}
            validationSchema={PersonalInformationvalidation}
        >
            <div
                style={{ marginBottom: '50px' }}
            >

                <h1
                    style={{ fontFamily: 'sans-serif' }}
                >
                    PERSONAL INFORMATION</h1>
                <Form>
                    <Grid container justify={'center'} spacing={3}>

                        <Grid item xs={4} >
                            <Field
                                name='firstName'
                                type='text'
                                as={TextField}
                                id='standard-basic'
                                label='firstName'
                                helperText={
                                    <ErrorMessage name="firstName" component={ErrorText} />
                                }
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={4} >
                            <Field
                                name='lastName'
                                type='text'
                                as={TextField}
                                id='standard-basic'
                                label='lastName'
                                helperText={<ErrorMessage name='lastName' component={ErrorText} />}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={8}>
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


                        <Grid item xs={6}>
                            <Field
                                name='age'
                                type='number'
                                as={TextField}
                                // id='standard-basic'
                                label='age'
                                id='standard-number'
                                helperText={<ErrorMessage name='age' component={ErrorText} />}
                                fullwidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Field
                                name='number'
                                type='number'
                                as={TextField}
                                id='standard-number'
                                label='Phonenumber'
                                helperText={<ErrorMessage name='number' component={ErrorText} />}
                                fullwidth
                            />
                        </Grid>

                        <div className="buttons">
                            <Button variant="contained" color="primary" onClick={() => submit(0)}>      Back          </Button>
                            <Button variant="contained" color="primary" type="submit">                  Next          </Button>
                        </div>
                    </Grid>
                </Form>
            </div>
        </Formik>
    )
}