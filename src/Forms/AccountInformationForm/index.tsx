import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { AccountType , Props} from '../../Types'
import { ErrorText } from '../ErrorText'
import { AcountInfoFormValidation } from '../../validationSchema'
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


const initialValues: AccountType = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
}

export const AccountInformationForm:React.FC<Props> = (
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
            onSubmit={(values: AccountType) => {
                setFormValues({ ...values, ...prevValues });
                submit(3);
            }}
            validationSchema={AcountInfoFormValidation}
        >
            <div
                        style={{marginBottom:'50px'}}
            >
                <h1
                    style={{ fontFamily: 'sans-serif' }}

                >
                    ACCOUNT INFORMATION
                </h1>
                <Form>
                    <Grid container justify={'center'} spacing={3} >
                        <Grid item xs={4}>

                            <Field
                                name='username'
                                type='text'
                                as={TextField}
                                id='standard-basic'
                                label='username'
                                helperText={
                                    <ErrorMessage name="username" component={ErrorText} />
                                }
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Field
                                name='email'
                                type='email'
                                as={TextField}
                                id='standard-basic'
                                label='email'
                                helperText={<ErrorMessage name='email' component={ErrorText} />}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <Field
                                name='password'
                                type='password'
                                as={TextField}
                                id='standard-basic'
                                label='password'
                                helperText={<ErrorMessage name='password' component={ErrorText} />}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={8} >
                            <Field
                                name='confirmPassword'
                                type='password'
                                as={TextField}
                                id='standard-basic'
                                label='confirmPassword'
                                helperText={<ErrorMessage name='confirmPassword' component={ErrorText} />}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <div className="buttons">
                            <Button variant="contained" color="primary" onClick={() => submit(1)}>      Back          </Button>
                            <Button variant="contained" color="primary" type="submit">                  Next          </Button>
                        </div>
                </Form>
            </div>
        </Formik>
    )
}