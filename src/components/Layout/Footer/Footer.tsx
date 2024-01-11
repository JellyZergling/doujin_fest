import styles from './Footer.module.scss'

const Footer:React.FC = () => {
  return(
    <footer className={styles.footer}>
        <div className={styles.content}>
            Footer
        </div>
    </footer>
  )
}

export default Footer