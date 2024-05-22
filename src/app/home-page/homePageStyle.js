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

export default styles;