import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#d81b60',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

export default theme;
