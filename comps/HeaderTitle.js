import styles from '../styles/Header.module.css'
import Link from 'next/link';

export default function HeaderTitle() {


    return (
        <div className={styles.center}>
            
            <h1 className={styles.title}><Link href="/"><a>
            <img src="/images/logo.png" alt="logo" height="52" width="52" className={styles.logo} />
            <span className={styles.firstWord}>WestPlains</span> &nbsp;
                <span className={styles.secondWord}>Development</span>
                </a></Link>
               
            </h1>
        </div>
    )
}
