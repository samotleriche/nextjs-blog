import React from 'react';
import Link from 'next/link';

import styles from '../styles/modules/FeedArea.module.css';

const FeedArea = ({ articles }) => {
  // const iterator = [1, 2, 3, 4, 5];
  const relatedTopics = ['JS', 'Python'];

  return (
    <>
      <section className={styles.itemsList}>
        {articles.map((item, k) => (
          <Link key={k} href={`/posts/${item.id}`}>
            <article>
              <header>
                <h1>{item.title}</h1>
                {relatedTopics &&
                  relatedTopics.map((topic) => (
                    <span key={topic}>{topic}</span>
                  ))}
                <time dateTime={'2019'}>Jul, 24 2019</time>
              </header>
              <p>{item.body}</p>
            </article>
          </Link>
        ))}
      </section>
    </>
  );
};

export default FeedArea;
