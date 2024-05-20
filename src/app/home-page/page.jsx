import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ReportCard from '../components/report-card';
import db from '/data/db.json';

const styles = {
  container: {
    backgroundColor: 'lightgrey',
    minHeight: '100vh',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 4,
    width: '100%',
    padding: '20px',
  },

  searchInput: {
    backgroundColor: 'white',
    marginRight: '10px',
  },

  goButton: {
    backgroundColor: 'blue',
    color: 'white',
    marginRight: '10px',
    height: '40px',
  },

  createButton: {
    backgroundColor: '#5ceb28',
    color: 'white',
    height: '40px',
  },

  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    justifyContent: 'center',
    width: '100%',
  },
}

const HomePage = () => {
  const reportData = db.reports;

  return (
    <Box sx={styles.container}>
      <Box sx={styles.searchContainer}>
        <TextField id="search" label="Search" variant="outlined" size="small" sx={styles.searchInput} />
        <Button variant="contained" style={styles.goButton}>GO</Button>
        <Button variant="contained" style={styles.createButton}>CREATE NEW</Button>
      </Box>

      <Box sx={styles.gridContainer}>
        {reportData.map((report) => (
          <ReportCard key={report.id} imageUrl={report.image} title={report.title} />
        ))}
      </Box>
    </Box>
  );
}

export default HomePage;