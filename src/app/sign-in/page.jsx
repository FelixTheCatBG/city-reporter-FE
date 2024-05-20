"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Link from "next/link";
import { useLoginFormValidator } from "./useSignInFormValidator";
import { authenticateUser } from './auth';


const styles = {
  container: {
    backgroundColor: 'lightgrey',
    minHeight: '100vh',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formContainer: {
    width: '450px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    margin: 'auto',
  },
  title: {
    textAlign: 'left',
    marginTop: '20px',
    marginBottom: '20px',
    width: '100%',
    marginLeft: '20px',
  },
  form: {
    width: '400px',
    backgroundColor: 'white',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    margin: 'auto',
  },
  button: {
    backgroundColor: '#5ceb28',
    color: 'white',
    width: '350px',
    marginBottom: '10px',
  },
  hrContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px 0',
  },
  hr: {
    width: '35%',
    borderBottom: '1px solid black',
    margin: '0 10px',
  },
  signUpButton: {
    backgroundColor: '#555',
    color: 'white',
    width: '350px',
    marginBottom: '20px',
  },
  formFieldError: {
    borderColor: 'red',
  },
  formFieldErrorMessage: {
    color: 'red',
    fontSize: '0.875em',
    height: '1em',
  },
};

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();



  const { errors, validateForm, onBlurField } = useLoginFormValidator(form);

  const onUpdateField = e => {
    const { name, value } = e.target;
    const nextFormState = {
      ...form,
      [name]: value,
    };
    setForm(nextFormState);
    if (errors && errors[name] && errors[name].dirty)
      validateForm({
        form: nextFormState,
        errors,
        field: name,
      })
  };

  const onSubmitForm = async e => {
    e.preventDefault();
    console.log("Form submitted");

    const { email, password } = form;

    const {isValid} = validateForm({form, errors, forceTouchErrors: true})

    if (!isValid) return;

    try {
      const authenticatedUser = await authenticateUser(email, password);
      if (authenticatedUser) {
        console.log('User authenticated:', authenticatedUser);
        router.push("/home-page");
      } else {
        setErrorMessage("Invalid email or password.");
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <form style={styles.container} onSubmit={onSubmitForm}>
      <Box sx={styles.formContainer}>
        <h1 style={styles.title}>Sign In</h1>
        <div
          component="form"
          sx={styles.form}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="email"
            name="email"
            label="Email..."
            variant="filled"
            type='text'
            sx={{ bgcolor: 'white', width: '100%', mb: 1, ...(errors.email.dirty && errors.email.error && styles.formFieldError)}}
            value={form.email}
            onChange={onUpdateField}
            onBlur={onBlurField}
            error={errors.email.dirty && Boolean(errors.email.error)}
            helperText={errors.email.dirty && errors.email.error ? errors.email.message : ' '}
          />
          <TextField
            id="password"
            name='password'
            label="Password..."
            variant="filled"
            type='password'
            sx={{ bgcolor: 'white', width: '100%', mb: 1, ...(errors.email.dirty && errors.email.error && styles.formFieldError)}}
            value={form.password}
            onChange={onUpdateField}
            onBlur={onBlurField}
            error={errors.password.dirty && Boolean(errors.password.error)}
            helperText={errors.password.dirty && errors.password.error ? errors.password.message : ' '}
          />
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <Button
          variant="contained"
          type="submit"
          style={styles.button}
        >
          enter
        </Button>
        <Box sx={styles.hrContainer}>
          <hr style={styles.hr} />
          <span style={{ color: 'black' }}>OR</span>
          <hr style={styles.hr} />
        </Box>
        <Link href="/sign-up">
        <Button variant="sign up" style={styles.signUpButton}>sign up</Button>
        </Link>
        </Box>
    </form>
  );
}

export default SignIn;