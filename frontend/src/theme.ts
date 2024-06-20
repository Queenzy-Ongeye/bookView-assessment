import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5ACCCC',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5', 
      paper: '#ffffff', // White paper background
    },
  },
  typography: {
    fontFamily: 'Mulish, Arial, sans-serif',
    h3: {
      fontWeight: 700,
      color: 'white',
    },
    h4: {
      fontWeight: 600,
      color: 'White',
    },
    body2: {
      color: '#555555',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontSize: '16px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default theme;