import React from 'react';
import Box from '@mui/material/Box';
import styles from './reportCardStyles';

const ReportCard = ({ imageUrl, title }) => {
  return (
    <Box sx={styles.cardContainer}>
      <image src={imageUrl} alt="Report Image" style={styles.image} />
      <h2 style={styles.title}>{title}</h2>
    </Box>
  );
}

export default ReportCard;
