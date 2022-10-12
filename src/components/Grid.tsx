import React, { FunctionComponent } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Grid.module.css"

type GridProps = {
  children: any
}

const Grid: FunctionComponent<GridProps> = ({children}: GridProps): JSX.Element => {
  return (
    <div>
      <div className={styles.band}>
        <div className={styles.item1}>
          {children}
        </div>
      </div>
    </div>
  )
}
export default Grid