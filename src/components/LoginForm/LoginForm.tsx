import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box, IconButton, useTheme } from '@mui/material';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const LoginForm = () => {
  return (
    <Box>
      <Button variant="contained">Sign In</Button>
    </Box>
  );
};

export default LoginForm;
