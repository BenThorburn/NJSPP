
import type { AppProps } from 'next/app'
import Layout from '../components/layouts/layout'


import '../styles/global/globals.css'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
