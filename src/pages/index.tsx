import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import SalesCard from '../components/Card'
import Grid from '../components/Grid'
import Container from '../components/Container'
import Head from 'next/head'

const Home = () => {
  return (
    <main>
      <Container>
        <Head>
        </Head>
        <Grid>
          <SalesCard />
        </Grid>
      </Container>
    </main>
  )
}

export default Home
