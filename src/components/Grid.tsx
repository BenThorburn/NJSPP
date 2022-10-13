import React, { FunctionComponent } from "react";
import styles from "../styles/Grid.module.css"

type GridProps = {
  children: any
}

const Grid: FunctionComponent<GridProps> = ({children}: GridProps): JSX.Element => {
  return (
    <div className={styles["core"]}>
      <div className={styles["band"]}>
        <div className={styles["item1"]}>
          {children}
        </div>
      </div>
    </div>
  )
}
export default Grid