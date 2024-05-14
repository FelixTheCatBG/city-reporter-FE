import Link from "next/link";
import Button from "@mui/material/Button";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SignIn() {
  return (
     <div className = "Sign In" style={{ backgroundColor: 'lightgrey', minHeight: '100vh', color: 'black', display: 'flex', flexDirection: 'column' }}>
     <Box
     sx={{
          width: '450px',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          margin: 'auto',
      }}
     >
     <h1 style={{ textAlign: 'left', marginTop: '20px', marginBottom: '20px', width: '100%', paddingLeft: '28px'}}>Sign In</h1>
     <Box
     component="form"
     sx={{
          width: '400px',
          backgroundColor: 'white',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          margin: 'auto',
     }}
     noValidate
     autoComplete="off"
   >
     <TextField id="email" label="Email..." variant="filled" sx={{ bgcolor: 'white', width: '100%', mb: 1}}/>
     <TextField id="password" label="Password..." variant="filled" sx={{ bgcolor: 'white', width: '100%', mb: 1}}/>
   </Box>
   <Button variant="enter" style={{ backgroundColor: '#5ceb28', color: 'white', width: '350px' }}>enter</Button>
   <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', my: 2 }}>
          <hr style={{ width: '35%', borderBottom: '1px solid black', margin: '0 10px' }} />
          <span style={{ color: 'black' }}>OR</span>
          <hr style={{ width: '35%', borderBottom: '1px solid black', margin: '0 10px' }} />
        </Box>
   <Button variant="sign up" style={{ backgroundColor: '#555', color: 'white', width: '350px', marginBottom: '20px' }}>sign up</Button>
   </Box>
   </div>
  );
}

