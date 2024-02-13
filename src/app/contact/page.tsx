import Image from 'next/image';
import styles from './contact.module.css';

export default function ContactPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/contact.png' alt='Contact' fill className={styles.img} />
      </div>
      <div className={styles.formContainer}></div>
    </div>
  );
}
