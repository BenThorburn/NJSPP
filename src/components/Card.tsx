
import React, { useState, useMemo, FunctionComponent} from 'react';
import styles from '../styles/components/grid.module.css'

const Card: FunctionComponent = (): JSX.Element => {
  return (
    <div className={styles["core"]}>
      <div className={styles["band"]}>


        <div className={styles["item1"]}>
          <a href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852" className={styles["card"]}>
            <img className={styles["thumb"]} src="/static/images/isoroom.jpeg"/>
            <article>
              <h1>Title</h1>
              <span>Author</span>
            </article>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Card