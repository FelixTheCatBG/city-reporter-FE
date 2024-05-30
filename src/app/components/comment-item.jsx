import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from './commentItemStyles';

const CommentItem = ({ value, onChange }) => {
     return (
       <Box sx={styles.commentContainer} style={{ cursor: 'pointer' }}>
         <h1 style={styles.title}>Add your comment here</h1>
         <TextField
        label="Text..."
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={value}
        onChange={onChange}
        sx={styles.commentInput}
        />
       </Box>
     );
   }

   export default CommentItem;