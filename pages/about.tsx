import type { NextPage } from 'next';
import Link from 'next/link';

import styles from '../styles/About.module.scss';

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className="goBack">
        <Link href="/">
          <a>home</a>
        </Link>
      </div>

      <div className={styles.center}>
        <h1 className={styles.title}>
          I build ideas
          <br />
          using the best
        </h1>
      </div>

      <main className={styles.main}>
        <h2>About</h2>

        <p className="size-large">
          Hello, I&apos;m Gustavo. I&apos;m a front-end developer with over 5+
          years of experience in programming with the most diverse languages.
        </p>

        <p>
          I am a computer science student, Christian, passionate about
          developing systems for users using the best in the market.
        </p>

        <p>
          I&apos;ve been a front-end developer since 2018., when I worked
          developing websites with pure HTML, CSS and JS. In 2019 I started
          working with React, React Native and Node.js, hence my passion for the
          frontend. From there I started to focus my studies and developments on
          React until I discovered Next.js. Since then, I have been studying and
          looking to learn more about React and Next and the entire ecosystem.
        </p>

        <p>
          Currently on my main stack I work with React and Next.js,
          Styled-Components and SASS. I always try to focus on the UX and
          performance of the application and, when possible, I try to transform
          the application into a PWA. I really enjoy having some challenges and
          improving myself and my team through studies and discussions.
        </p>

        <p>
          When I&apos;m free, I like to be with my family, go to a nice
          restaurant with my girlfriend, play soccer, watch a movie or read or
          just sit in a circle of friends and make small talk.
        </p>

        <p>
          I&apos;m a little shy, but I&apos;m always aware of what my team says
          and I&apos;m always suggesting improvements for everyone, both for the
          team and for the project.
        </p>

        <a
          href="https://www.canva.com/design/DAEP9Gx926E/FRzQ2T0jW-hIe_lStx7x-A/view?utm_content=DAEP9Gx926E&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent"
          target="_blank"
          rel="noopener noreferrer"
          className="blue-title"
        >
          My resume
        </a>
      </main>
    </div>
  );
};

export default About;
