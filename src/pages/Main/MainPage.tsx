import Layout from "../../components/Layout/Layout"
import styles from "./MainPage.module.scss"

const MainPage:React.FC = () => {
  return(
    <Layout>
      <div className={styles.section} id="1">1</div>
      <div className={styles.section} id="2">2</div>
      <div className={styles.section} id="3">3</div>
      <div className={styles.section} id="4">4</div>
      <div className={styles.section} id="5">5</div>
    </Layout>
  )
}

export default MainPage