"use client"
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ReportCard from '../components/report-card';
import { getReports } from './reportsService';
import styles from './homePageStyle';

const HomePage = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const data = await getReports();
        setReports(data);
      }  catch (error) {
        console.error('Error fetching reports:', error);
      } finally{
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  return (
        <Box sx={styles.container}>
          <Box sx={styles.searchContainer}>
            <TextField id="search" label="Search" variant="outlined" size="small" sx={styles.searchInput} />
            <Button variant="contained" sx={styles.goButton}>GO</Button>
            <Button variant="contained" sx={styles.createButton}>CREATE NEW</Button>
          </Box>
          {loading ? (
            <p>Loading...</p>
          ) : (

          <Box sx={styles.gridContainer}>
            {reports.map((report) => (
              <ReportCard key={report.id} imageUrl={report.image} title={report.title} />
            ))}
          </Box>
          )}
        </Box>
      )}

export default HomePage;