import Link from "next/link";
import Button from "@mui/material/Button";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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

  signInButton: {
    backgroundColor: '#555',
    color: 'white',
    width: '350px',
    marginBottom: '20px',
  },
};

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