import { sanityClient } from "../../sanity";
import Image from "../../components/Image";
// import styles from "../../styles/how-to-posts.module.css";

const HowToPost = ({
  title,
  slug,
  id,
  introduction,
  mainImage,
  images,
  extraInformation,
}) => {
  console.log(images);
  return (
    <div className="main_container">
      <h1>{title}</h1>
      <h2 className="intro">{introduction}</h2>
      <div className="main_image_container">
        <Image identifier="main-image" image={mainImage} alt="" />
      </div>
      {images && (
        <div className="guide_images">
          {images.map(({ _key, asset, topCaption, bottomCaption }, image) => (
            <div key={_key} className="guide_image_text">
              <h2>{topCaption}</h2>
              <Image key={_key} identifier="image" image={asset} alt="" />
              <h2 className="bottom_caption">{bottomCaption}</h2>
            </div>
          ))}
        </div>
      )}
      <h3>{extraInformation}</h3>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  console.log("PAGESLUGGGG: ", pageSlug);

  const query = `*[ _type == "howto" && slug.current == $pageSlug][0]{
    title,
    slug,
    id,
    introduction,
    mainImage,
    images,
    extraInformation
  }`;

  const howto = await sanityClient.fetch(query, { pageSlug });

  if (!howto) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        title: howto.title,
        slug: howto.slug,
        id: howto.id,
        introduction: howto.introduction,
        mainImage: howto.mainImage,
        images: howto.images,
        extraInformation: howto.extraInformation,
      },
    };
  }
};

export default HowToPost;
