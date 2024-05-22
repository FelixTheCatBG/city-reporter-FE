"use client"
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ReportCard from '../components/report-card';
import db from '/data/db.json';
import styles from './homePageStyle';

const HomePage = () => {
  const [mounted, setMounted] = useState(false);
  const reportData = db.reports;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      {mounted && (
        <Box sx={styles.container}>
          <Box sx={styles.searchContainer}>
            <TextField id="search" label="Search" variant="outlined" size="small" sx={styles.searchInput} />
            <Button variant="contained" sx={styles.goButton}>GO</Button>
            <Button variant="contained" sx={styles.createButton}>CREATE NEW</Button>
          </Box>

          <Box sx={styles.gridContainer}>
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