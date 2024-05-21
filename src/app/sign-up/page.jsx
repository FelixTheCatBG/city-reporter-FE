import Link from "next/link";
import Button from "@mui/material/Button";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { signUpStyles } from "./signUpStyles";

export default function SignUp() {
  return (
    <div style={signUpStyles.container} className="Sign Up">
      <Box sx={signUpStyles.formContainer}>
        <h1 style={signUpStyles.title}>Sign Up</h1>
        <Box
          component="form"
          sx={signUpStyles.form}
          noValidate
          autoComplete="off"
        >
          <TextField id="name" label="Name..." variant="filled" sx={{ bgcolor: 'white', width: '100%', mb: 1 }} />
          <TextField id="email" label="Email..." variant="filled" sx={{ bgcolor: 'white', width: '100%', mb: 1 }} />
          <TextField id="password" label="Password..." variant="filled" sx={{ bgcolor: 'white', width: '100%', mb: 1 }} />
          <TextField id="passwordAgain" label="Password again..." variant="filled" sx={{ bgcolor: 'white', width: '100%', mb: 1 }} />
        </Box>
        <Button variant="create" style={signUpStyles.button}>create</Button>
        <Box sx={signUpStyles.hrContainer}>
          <hr style={signUpStyles.hr} />
          <span style={{ color: 'black' }}>OR</span>
          <hr style={signUpStyles.hr} />
        </Box>
        <Link href="/sign-in">
        <Button variant="sign in" style={signUpStyles.signInButton}>sign in</Button>
        </Link>
      </Box>
    </div>
  );
}
