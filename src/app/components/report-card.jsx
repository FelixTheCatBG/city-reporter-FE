import React from 'react';
import Box from '@mui/material/Box';
import styles from './reportCardStyles';

const ReportCard = ({ imageUrl, title }) => {
  return (
    <Box sx={styles.cardContainer}>
      <img src={imageUrl} alt="title" style={styles.image} />

      <h2 style={styles.title}>{title}</h2>
    </Box>
  );
}

export default ReportCard;
