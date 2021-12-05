import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Paper, Box, FormControl, TextField } from '@mui/material';
import styles from './LoginForm.module.css';
import axios from 'axios';

const LoginForm = () => {
  const [formState, setFormState] = React.useState({
    email: '',
    password: '',
    error: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.AUTH_URL}/login`,
        formState
      );

      document.cookie = `access_token=${response.data.access_token}; httpOnly`;
      window.location.href = '/';
    } catch (error: any) {
      setFormState({ ...formState, error: error.response.data.message });
    }
  };

  return (
    <Box>
      <Paper elevation={6} className={styles.root}>
        <form onSubmit={handleSubmit}>
          <Stack>
            <FormControl className={styles.formControl}>
              <TextField
                variant="outlined"
                name="email"
                type="email"
                id="email"
                label="Email"
                value={formState.email}
                onChange={handleChange}
                error={formState.error !== ''}
              />
            </FormControl>
            <FormControl className={styles.formControl}>
              <TextField
                variant="outlined"
                name="password"
                type="password"
                id="password"
                label="Password"
                value={formState.password}
                onChange={handleChange}
                error={formState.error !== ''}
                helperText={formState.error}
              />
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={styles.button}
              style={{ marginTop: 10 }}
            >
              Login
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginForm;
