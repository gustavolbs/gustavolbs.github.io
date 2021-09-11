import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Link href="/about">
          <a className={styles.sidebarText}>
            <div className="label-about" />
          </a>
        </Link>
        <Link href="/work">
          <a className={styles.sidebarText}>
            <div className="label-work blue-title" />
          </a>
        </Link>
        <Link href="/contact">
          <a className={styles.sidebarText}>
            <div className="label-contact blue-title" />
          </a>
        </Link>
      </div>
      <div className={styles.backgroundPhoto} />
    </div>
  );
};

export default Home;
