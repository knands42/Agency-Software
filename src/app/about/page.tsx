import Image from 'next/image';
import styles from './about.module.css';

export default function AboutPage(): JSX.Element {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image
          src='https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400'
          alt=''
          fill
        />
      </div>
    </div>
  );
}
