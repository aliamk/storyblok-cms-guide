/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import { sanityClient, PortableText, serializers } from "../sanity";
import { urlFor } from "../sanity";
import styles from "../styles/Home.module.css";

const Home = ({ howToPosts }) => {
  console.log(howToPosts);
  return (
    <>
      {howToPosts && (
        <div className={styles.homepage_intro}>
          {howToPosts.map((howToPost) => (
            <PortableText
              key={howToPost._id}
              blocks={howToPost.homepageIntroduction}
              className={styles.instructions}
              serializers={serializers}
            />
          ))}
        </div>
      )}

      <div className={styles.main}>
        {howToPosts && (
          <div className={styles.feed}>
            {howToPosts.map((howToPost, index) => (
              <>
                <div className={styles.card}>
                  <h3 className={styles.page_title}>{howToPost.pageTitle}</h3>
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
  const query = `*[ _type == "howto"] | order(_createdAt asc)`;
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
