'use client';

import styles from './links.module.css';
import NavLink from './link/NavLink';
import { useState } from 'react';
import Image from 'next/image';

const links = [
  {
    title: 'Homepage',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
];

export default function Links() {
  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink key={link.path} item={link} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink item={{ title: 'Register', path: '/register' }} />
          </>
        )}
      </div>
      <Image
        src='/menu.png'
        width={50}
        height={50}
        alt='menu icon'
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink key={link.path} item={link} />
          ))}
        </div>
      )}
    </div>
  );
}
