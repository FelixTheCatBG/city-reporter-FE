import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const styles = {
     Container: {
       backgroundColor: 'white',
       borderRadius: '10px',
       boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       padding: '20px',
       margin: '20px',
       textAlign: 'center',
     },
     button: {
       backgroundColor: 'blue',
       color: 'white',
       width: '350px',
       marginBottom: '10px',
     },
     title: {
       color: 'black',
       margin: '10px 0',
       textTransform: 'uppercase',
     },
   };
   const CommentItem = ({ cmtContent, title }) => {
     return (
       <Box sx={styles.Container}>
         <h2 style={styles.title}>{title}</h2>
         <TextField style={style.TextField}>{commentContent}></TextField>
       </Box>
     );
   }

   export default CommentItem;