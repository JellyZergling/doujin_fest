import styles from './Header.module.scss'

const Header = () => {
  return(
    <header className={styles.header}>
      <div className={styles.contents}>
        <div className={styles.logo}>
          로고
        </div>
        <nav className={styles.navigation}>
          <ul>
            <li>메뉴 1</li>
            <li>메뉴 2</li>
            <li>메뉴 3</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header