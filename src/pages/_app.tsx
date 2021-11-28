import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import ResponsiveAppBar from '../components/AppBar/AppBar';
import Layout from '../components/Layout/Layout';
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material';
import getDesignTokens from '../../styles/palettes';
import { ColorModeContextProvider } from '../../styles/ColorModeContextProvider';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ColorModeContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ColorModeContextProvider>
  );
};

export default MyApp;
