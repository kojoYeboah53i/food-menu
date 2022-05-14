import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div className={headerStyles.spaces}>
        <h1 className={headerStyles.title}> <span> Web Dev</span> News</h1>
        <p className={headerStyles.description}>
            A collection of web development news.
        </p>
    </div>
  )
}

export default Header;