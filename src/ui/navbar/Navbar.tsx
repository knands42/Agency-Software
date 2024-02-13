'use client';

import Link from 'next/link';
import Links from './links/Links';
import styles from './navbar.module.css';

export default function Navbar(): JSX.Element {
  return (
    <Link href='/' className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <Links />
    </Link>
  );
}
