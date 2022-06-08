import styles from './Footer.module.scss'
import Link from 'next/link';

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className={styles.footerbottom}>
      <div className="container">
        
        <div className={styles.myFooter}>
        <ul>
        <li div className={styles.copyright}>
          &copy; {getCurrentYear()} ASTROLOGY
          </li>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href='/privacy'>
              <a>Privacy</a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a>Contact</a>
            </Link>
          </li>
       
        </ul>
       
      </div>
      </div>
    </div>
  );
}

export default Footer;