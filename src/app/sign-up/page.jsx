import Link from "next/link";
import Button from "@mui/material/Button";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from "./signUpStyles";

export default function SignUp() {
  return (
    <div style={styles.container} className="Sign Up">
      <Box sx={styles.formContainer}>
        <h1 style={styles.title}>Sign Up</h1>
        <Box
          component="form"
          sx={styles.form}
          noValidate
          autoComplete="off"
        >
          <TextField id="name" label="Name..." variant="filled" sx={{ bgcolor: 'white', width: '100%', mb: 1 }} />
          <TextField id="email" label="Email..." variant="filled" sx={{ bgcolor: 'white', width: '100%', mb: 1 }} />
          <TextField id="password" label="Password..." variant="filled" sx={{ bgcolor: 'white', width: '100%', mb: 1 }} />
          <TextField id="passwordAgain" label="Password again..." variant="filled" sx={{ bgcolor: 'white', width: '100%', mb: 1 }} />
        </Box>
        <Button variant="create" style={styles.button}>create</Button>
        <Box sx={styles.hrContainer}>
          <hr style={styles.hr} />
          <span style={{ color: 'black' }}>OR</span>
          <hr style={styles.hr} />
        </Box>
        <Link href="/sign-in">
        <Button variant="sign in" style={styles.signInButton}>sign in</Button>
        </Link>
      </Box>
    </div>
  );
}
