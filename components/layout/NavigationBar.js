import Link from 'next/link';
import styles from './NavigationBar.module.scss';
//import { MdOutlineCodeOff } from 'react-icons/md';

function NavigationBar() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link href='/'>
          <a>
            <span>ASTROLOGY</span>
          </a>
        </Link>
      </div>
     
    </header>
  );
}

export default NavigationBar;