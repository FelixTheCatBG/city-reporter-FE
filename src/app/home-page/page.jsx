"use client"
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ReportCard from '../components/report-card';
import db from '/data/db.json';
import {
  containerStyles,
  searchContainerStyles,
  searchInputStyles,
  goButtonStyles,
  createButtonStyles,
  gridContainerStyles,
} from './homePageStyle';

const HomePage = () => {
  const [mounted, setMounted] = useState(false);
  const reportData = db.reports;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      {mounted && (
        <Box sx={containerStyles}>
          <Box sx={searchContainerStyles}>
            <TextField id="search" label="Search" variant="outlined" size="small" sx={searchInputStyles} />
            <Button variant="contained" sx={goButtonStyles}>GO</Button>
            <Button variant="contained" sx={createButtonStyles}>CREATE NEW</Button>
          </Box>

          <Box sx={gridContainerStyles}>
            {reportData.map((report) => (
              <ReportCard key={report.id} imageUrl={report.image} title={report.title} />
            ))}
          </Box>
        </Box>
      )}
    </div>
  );
}

export default HomePage;