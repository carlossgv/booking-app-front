import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Paper, Box } from '@mui/material';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <Paper elevation={6} className={styles.root}>
      <Box>MY TEXT</Box>
      <Button variant="contained">Sign In</Button>
    </Paper>
  );
};

export default LoginForm;
