import Head from 'next/head';
import FeedArea from '../components/feedArea';

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Tomas Leriche: Software!!!</title>
        <meta
          name="keywords"
          content="Software Engineer, Web Development, Blog"
        />
        <meta
          name="description"
          content="web developemet website leriche media"
        />
      </Head>
      <FeedArea articles={articles} />
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=6`,
    );

    const articles = await res.json();

    return {
      props: {
        articles,
      },
    };
  } catch (err) {
    console.log(err);

    return {
      props: {
        articles: [],
      },
    };
  }
};
