import styles from './Header.module.scss'
import { Link, To} from 'react-router-dom';

const Header = () => {
  interface LinkType{
    Id: number,
    Link: To,
    Name: string,
  };

  const linksArray: LinkType[] =[
    {
      Id: 0,
      Link: '/',
      Name: 'Main'
    },
    {
      Id: 1,
      Link: '/Artist',
      Name: 'Artist'
    },
    {
      Id: 2,
      Link: '/',
      Name: '메뉴'
    }
  ]

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
                  <li><Link to={e.Link} className={styles.Class}>{e.Name}</Link></li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header