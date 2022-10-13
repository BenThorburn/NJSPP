import React, { FunctionComponent } from 'react'

// Components
import Navbar from '../navbar'
import Footer from '../footer'

//import styles from '../styles/components/layout.module.css'

type Props = {
  children: JSX.Element
}

const Layout: FunctionComponent<Props> = ({children}: Props): JSX.Element => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout