'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navlink.module.css';

type NavLinkProps = {
  item: {
    title: string;
    path: string;
  };
};

export default function NavLink({ item }: NavLinkProps) {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={clsx(styles.container, {
        [styles.active]: pathName === item.path,
      })}
    >
      {item.title}
    </Link>
  );
}
