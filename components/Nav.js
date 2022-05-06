import Link from 'next/link';
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav>
        <ul className={navStyles.nav}>
            <li className={navStyles.navItem}>
                <Link href="/">
                    <a className={navStyles.navLink}>Home</a>
                </Link>
            </li>
            <li className={navStyles.navItem}>
                <Link href="/about">
                    <a className={navStyles.navLink}>About</a>
                </Link>
            </li>
      
        </ul>
    </nav>
  )
}



export default Nav;