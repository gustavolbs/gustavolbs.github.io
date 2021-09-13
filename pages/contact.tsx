import React, { useEffect, useState } from 'react';
import axios from 'axios';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import toast from 'react-hot-toast';

import styles from '../styles/Contact.module.scss';

const Home: NextPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [triggered, setIsTriggered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    document?.addEventListener('click', () => {
      return isTabletOrMobile && setIsTriggered(!triggered);
    });
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // const response = await axios.post(
      //   `https://formsubmit.co/ajax/${process.env.NEXT_PUBLIC_EMAIL_TOKEN}`,
      //   {
      //     ...formData,
      //   }
      // );

      toast.success('Successfully created!');
    } catch (error) {
      console.log(error);
      toast.error(error.message ? error.message : error);
    }
  };

  const handleData = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((curr) => ({ ...curr, [name]: value }));
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('gustavo.luiz.bispo.santos@gmail.com');
    toast.success('Email copied with success!');
  };

  return (
    <div className={styles.container}>
      <div className="goBack">
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>

      <div className={styles.center}>
        <h1 className={styles.title}>
          Let&apos;s make the
          <br />
          web better together!
        </h1>
      </div>

      <main className={styles.main}>
        <h2>Contact</h2>

        <p>
          I&apos;m looking for opportunities to build something with someone,
          not just work. I want to bring my experience so that we can work
          together and solve problems in ways that add value to both parties.
        </p>

        <p>Feel free to reach out through any platforms bellow:</p>

        <div className="blue-title">
          <span onClick={copyEmailToClipboard} />
          <a
            href="https://instagram.com/gugabispo99"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/gbispo-santos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <p>Or use the contact form bellow:</p>

        <form className={styles.contactForm}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleData}
              value={formData.name}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleData}
              value={formData.email}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={handleData}
              value={formData.subject}
            />
            <textarea
              name="message"
              placeholder="Message"
              onChange={handleData}
              value={formData.message}
            />
          </div>

          {/* FormSubmit.co settings */}
          <input type="hidden" name="_template" value="box" />

          <button type="button" onClick={handleSubmit}>
            Send Message!
          </button>
        </form>
      </main>
    </div>
  );
};

export default Home;
