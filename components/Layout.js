import Header from "./Header";
import Nav from "./Nav";
import styles from "../styles/Home.module.css";

const Layout = ({ children }) => {
  return (
      <>
        <Nav />
            <div className="container">
              <div className={styles.container}>

                <main className={styles.main}>
                  <Header />
                  {children}</main>
            </div>
         </div>
      </>
  );
};
export default Layout;
