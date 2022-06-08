import NavigationBar from './NavigationBar';
import Footer from './Footer';
import styles from './Layout.module.scss';

function Layout(props) {
  return (
    //within main div are thr routed components
    <div className={styles.app}>
      <NavigationBar />
      <main className={styles.main}>
        {props.children}
      </main>
    <Footer />
     
    </div>
  );
}

export default Layout;
