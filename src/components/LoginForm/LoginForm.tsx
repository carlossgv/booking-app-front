import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Paper, IconButton, useTheme, Box } from '@mui/material';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const LoginForm = () => {
  return (
    <Paper>
      <Box>MY TEXT</Box>
      <Button variant="contained">Sign In</Button>
    </Paper>
  );
};

export default LoginForm;
