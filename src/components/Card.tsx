import Image from "next/image";
import { FunctionComponent } from "react";
import styles from "../styles/Grid.module.css"

const Card: FunctionComponent = (): JSX.Element => {
  return (
    <div className="support-grid">
      <div className={styles.band}>


        <div className={styles.item1}>
          <a href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852" className={styles.card}>
            <img className={styles.thumb} src="/static/images/isoroom.jpeg"/>
            <article>
              <h1>International Artist Feature: Malaysia</h1>
              <span>Mary Winkler</span>
            </article>
          </a>
        </div>


        <div className={styles.item1}>
          <a href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852" className={styles.card}>
            <img className={styles.thumb} src="/static/images/isoroom.jpeg"/>
            <article>
              <h1>International Artist Feature: Malaysia</h1>
              <span>Mary Winkler</span>
            </article>
          </a>
        </div>


        <div className={styles.item1}>
          <a href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852" className={styles.card}>
            <img className={styles.thumb} src="/static/images/isoroom.jpeg"/>
            <article>
              <h1>International Artist Feature: Malaysia</h1>
              <span>Mary Winkler</span>
            </article>
          </a>
        </div>


        <div className={styles.item1}>
          <a href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852" className={styles.card}>
            <img className={styles.thumb} src="/static/images/isoroom.jpeg"/>
            <article>
              <h1>International Artist Feature: Malaysia</h1>
              <span>Mary Winkler</span>
            </article>
          </a>
        </div>


        <div className={styles.item1}>
          <a href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852" className={styles.card}>
            <img className={styles.thumb} src="/static/images/isoroom.jpeg"/>
            <article>
              <h1>International Artist Feature: Malaysia</h1>
              <span>Mary Winkler</span>
            </article>
            <h1>
              dsjcbnjdsncdsnc
              cdscdsc
              cdscdsccdscds
            </h1>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Card