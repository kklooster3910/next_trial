import '../styles/globals.css'
import { ThemeProvider } from 'theme-ui'

import Nav from '../src/components/nav.jsx'
import theme from '../theme';

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}><Nav /><Component {...pageProps} /></ThemeProvider>
}

export default MyApp
