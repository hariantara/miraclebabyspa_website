import '../styles/globals.css'
import type { AppProps } from 'next/app';
import {ChakraProvider} from '@chakra-ui/react';
import Layout from '../components/LandingPage_Layout';

function MyApp({ Component, pageProps, router }: AppProps) {
  console.log('MyApp Props: ', {pageProps, router});
  return (
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
  )
}

export default MyApp
