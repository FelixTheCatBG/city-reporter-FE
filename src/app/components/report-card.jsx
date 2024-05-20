import React from 'react';
import Box from '@mui/material/Box';

const styles = {
  cardContainer: {
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
  image: {
    width: '100%',
    borderRadius: '10px 10px 0 0',
  },
  title: {
    color: 'black',
    margin: '10px 0',
    textTransform: 'uppercase',
  },
};

const ReportCard = ({ imageUrl, title }) => {
  return (
    <Box sx={styles.cardContainer}>
      <image src={imageUrl} alt="Report Image" style={styles.image} />
      <h2 style={styles.title}>{title}</h2>
    </Box>
  );
}

export default ReportCard;
