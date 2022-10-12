import React, { FunctionComponent } from "react";
import styles from "../styles/Container.module.css"

type ContainerProps = {
  children: JSX.Element[]
}

const Container: FunctionComponent<ContainerProps> = ({children}: ContainerProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.card_heading}>
        {children}
      </div>
    </div>
  )
}

export default Container