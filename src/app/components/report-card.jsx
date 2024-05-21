import React from 'react';
import Box from '@mui/material/Box';
import { cardContainer, image, titleStyle } from './reportCardStyles';

const ReportCard = ({ imageUrl, title }) => {
  return (
    <Box sx={cardContainer}>
      <image src={imageUrl} alt="Report Image" style={image} />
      <h2 style={titleStyle}>{title}</h2>
    </Box>
  );
}

export default ReportCard;
