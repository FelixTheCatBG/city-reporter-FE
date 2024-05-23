"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from "next/link";
import axios from 'axios';
import styles from './newReportStyles';



const NewReport = () => {
     const [image, setImage] = useState(null);
     const [title, setTitle] = useState('');
     const [description, setDescription] = useState('');
     const router = useRouter();


const handleImageUpload = (event) => {
     const file = event.target.files[0];
     if(file) {
          const reader = new FileReader();
          reader.onload = () => {
               setImage(reader.result);
          };
          reader.readAsDataURL(file);
     };
}

const handleImageClick = () => {
     document.getElementById('upload-button').click();
   };

const handleSubmit = async() => {
     console.log({image, title, description});
     const reportData ={
          title,
          image,
          description
     };

     try{
          const response = await axios.post('http://localhost:3001/reports', reportData);
          if (response.status === 201) {
               console.log('Report submitted successfully');
               setImage(null);
               setTitle('');
               setDescription('');

               router.push("/home-page");
          }else{
               console.error('Failed to submit report')
          }
     }catch(error) {
          console.error('Error:', error.message);
     }
};

return(
     <Box sx={styles.container}>
      <Box sx={styles.formContainer} id="reportBox">
        <Box sx={styles.imageContainer} onClick={handleImageClick}>
          {image ? (
            <img src={image} alt="Uploaded" style={styles.imagePreview} />
          ) : (
            <Box sx={styles.imagePlaceholder}>Upload Image</Box>
          )}
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="upload-button"
            type="file"
            onChange={handleImageUpload}
          />
        </Box>
        <TextField
          label="Title..."
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={styles.titleInput}
          InputLabelProps={{
               style: { alignSelf: 'flex-start' },
          }}
        />
      </Box>
      <h1 style={styles.title}>Description</h1>
      <TextField
        label="Text..."
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={styles.descriptionInput}
      />
      <Box sx={styles.buttonContainer}>
      <Link href="/home-page">
          <Button
          variant="contained"
          sx={styles.cancelButton}>
               Cancel
          </Button>
        </Link>
      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={styles.submitButton}
      >
        Submit
      </Button>
      </Box>
    </Box>
  );
};

export default NewReport;