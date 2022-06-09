import Card from "../ui/Card";
import Link from "next/link";
import styles from './SignDetails.module.scss';
import Image from 'next/image';

function SignDetails(props) {
  return (
    <div className={styles.border}>
      <Card>
        <div className={styles.detail}>
          <Image
            src={props.image} 
            alt={props.title}
            width={500}
            height={500}
            layout="responsive"
          />
          <h1>{props.title}</h1>
          <p>{props.dates}</p>
          <p>{props.element}</p>
          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <button>
            <Link href="/">
              <a>Home</a>
            </Link>
          </button>
        </div>
      </Card>
    </div>
  );
}

export default SignDetails;