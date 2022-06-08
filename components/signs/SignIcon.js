import Card from "../ui/Card";
import styles from './SignIcon.module.scss'
import { useRouter } from 'next/router';
import Image from 'next/image';

function SignIcon(props) {

    const router = useRouter();
  
    function handleNavigate() {
      router.push('/' + props.title);
    }

    return (
        <div className={styles.item}>
            <Card>
                <div className={styles.image} onClick={handleNavigate}>
                    <Image  src={props.image} 
                        alt={props.title}
                        width={310}
                        height={310}
                        layout="responsive"/>       
                </div>
                <div className={styles.content}>
                    <h3>{props.title}</h3>
                    <p>{props.date}</p>
                </div>
            </Card>
        </div>
    )
}

export default SignIcon;