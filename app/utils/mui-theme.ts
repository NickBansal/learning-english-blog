import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#7aa16c',
    },
    secondary: {
      main: '#3DCC85',
    },
    error: {
      main: '#FF5000',
    },
  },
});

export default muiTheme;
