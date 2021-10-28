/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Toolbar from "../components/Toolbar";
import { sanityClient } from "../sanity";
import { urlFor } from "../sanity";
import styles from "../styles/Home.module.css";

const Home = ({ howToPosts }) => {
  console.log("FKJHF: ", howToPosts);
  return (
    <>
      <div className={styles.main}>
        {howToPosts && (
          <div className={styles.feed}>
            {howToPosts.map((howToPost, index) => (
              <>
                <div className={styles.card}>
                  <h3>{howToPost.title}</h3>
                  <Link href={`how-to-posts/${howToPost.slug.current}`}>
                    <div key={howToPost._id} className={styles.post}>
                      <img
                        className={styles.main_image}
                        src={urlFor(howToPost.mainImage)}
                      />
                    </div>
                  </Link>
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[ _type == "howto"]';
  const howToPosts = await sanityClient.fetch(query);

  if (!howToPosts.length) {
    return {
      props: {
        howToPosts: [],
      },
    };
  } else {
    return {
      props: {
        howToPosts,
      },
    };
  }
};

export default Home;
