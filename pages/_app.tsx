import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Cabecalho from '../src/components/Cabecalho/Cabecalho';
import { ThemeProvider } from '@mui/material';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ThemeProvider theme={tema}>
    //
    // </ThemeProvider>
    <>
      <Cabecalho></Cabecalho>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
