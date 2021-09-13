import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [triggered, setIsTriggered] = useState(false);

  useEffect(() => {
    document?.addEventListener('click', () => {
      return isTabletOrMobile && setIsTriggered(!triggered);
    });
  });

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Link href="/about">
          <a className={styles.sidebarText}>
            <div
              id="about"
              className={`animate label-about ${
                triggered ? 'triggeredHover' : ''
              }`}
            />
          </a>
        </Link>
        <Link href="/work">
          <a className={styles.sidebarText}>
            <div
              id="work"
              className={`animate label-work blue-title ${
                triggered ? 'triggeredHover' : ''
              }`}
            />
          </a>
        </Link>
        <Link href="/contact">
          <a className={styles.sidebarText}>
            <div
              id="contact"
              className={`animate label-contact blue-title ${
                triggered ? 'triggeredHover' : ''
              }`}
            />
          </a>
        </Link>
      </div>
      <div className={styles.backgroundPhoto} />

      <div className={styles.tapAnywhere}>Tap anywhere</div>
    </div>
  );
};

export default Home;
