// import Head from "../../next/head";
import styles from "../styles/Home.module.css";
const Layout = ({ children }) => {
  return (
    <div className="container">

      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};
export default Layout;
