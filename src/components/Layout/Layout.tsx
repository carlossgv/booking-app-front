import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import ResponsiveAppBar from '../AppBar/AppBar';
import styles from './Layout.module.css';

export default function Layout({ children }: { children: any }) {
  return (
    <div className={styles.root}>
      <ResponsiveAppBar />
      <Paper square className={styles.body}>
        {children}
      </Paper>
    </div>
  );
}
