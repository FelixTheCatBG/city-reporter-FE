import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import styles from './reportCardStyles';

const ReportCard = ({ imageUrl, title, onClick}) => {
  return (
    <Box sx={styles.cardContainer} onClick={onClick} style={{ cursor: 'pointer' }}>
      <Image src={`data:image/png;base64,${imageUrl}`} alt={title} width={300} height={200} style={styles.image} />      
      <h2 style={styles.title}>{title}</h2>
    </Box>
  );
}

export default ReportCard;
