"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Link from "next/link";
import { useLoginFormValidator } from "./useSignInFormValidator";
import { authenticateUser } from './auth';
import { signInStyles } from './signInStyles';

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
    <form style={signInStyles.container} onSubmit={onSubmitForm}>
      <Box sx={signInStyles.formContainer}>
        <h1 style={signInStyles.title}>Sign In</h1>
        <div
          component="form"
          sx={signInStyles.form}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="email"
            name="email"
            label="Email..."
            variant="filled"
            type='text'
            sx={{ bgcolor: 'white', width: '100%', mb: 1, ...(errors.email.dirty && errors.email.error && signInStyles.formFieldError)}}
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
            sx={{ bgcolor: 'white', width: '100%', mb: 1, ...(errors.email.dirty && errors.email.error && signInStyles.formFieldError)}}
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
          style={signInStyles.button}
        >
          enter
        </Button>
        <Box sx={signInStyles.hrContainer}>
          <hr style={signInStyles.hr} />
          <span style={{ color: 'black' }}>OR</span>
          <hr style={signInStyles.hr} />
        </Box>
        <Link href="/sign-up">
          <Button variant="sign up" style={signInStyles.signUpButton}>sign up</Button>
        </Link>
      </Box>
    </form>
  );
}

export default SignIn;