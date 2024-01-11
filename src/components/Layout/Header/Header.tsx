import { linksArray } from './Header.model';
import styles from './Header.module.scss'
import { Link } from 'react-router-dom';

const Header:React.FC = () => {
  return(
    <header className={styles.header}>
      <div className={styles.contents}>
        <div className={styles.logo}>
          로고
        </div>
        <nav className={styles.navigation}>
          <ul>
            {linksArray.map((e, _) => {
              return (
                  <li><Link to={e.Link} className={styles.Link}>{e.Name}</Link></li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header