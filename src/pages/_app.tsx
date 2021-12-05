import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import ResponsiveAppBar from '../components/AppBar/AppBar';
import Layout from '../components/Layout/Layout';
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material';
import getDesignTokens from '../../styles/palettes';
import { ColorModeContextProvider } from '../../styles/ColorModeContextProvider';
import { AuthProvider } from '../../contexts/auth';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <ColorModeContextProvider>
        <div>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <style global jsx>{`
            html,
            body,
            body > div:first-child,
            div#__next,
            div#__next > div {
              height: 100%;
            }
          `}</style>
        </div>
      </ColorModeContextProvider>
    </AuthProvider>
  );
};

export default MyApp;
