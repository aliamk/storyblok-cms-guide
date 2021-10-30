import { sanityClient, PortableText } from "../../sanity";
import Image from "../../components/Image";
// import styles from "../../styles/how-to-posts.module.css";

const HowToPost = ({
  title,
  slug,
  id,
  howToIntroduction,
  mainImage,
  images,
  extraInformation,
}) => {
  console.log(images);
  return (
    <div className="main_container">
      <h1>{title}</h1>
      <PortableText blocks={howToIntroduction} className="intro" />
      <div className="main_image_container">
        <Image identifier="main-image" image={mainImage} alt="" />
      </div>
      {images && (
        <div className="guide_images">
          {images.map(({ _key, asset, topCaption, bottomCaption }, image) => (
            <div key={_key} className="guide_image_text">
              <PortableText blocks={topCaption} />
              <Image key={_key} identifier="image" image={asset} alt="" />
              <PortableText blocks={bottomCaption} className="bottom_caption" />
            </div>
          ))}
        </div>
      )}
      <PortableText blocks={extraInformation} className="instructions" />
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
    howToIntroduction,
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
        howToIntroduction: howto.howToIntroduction,
        mainImage: howto.mainImage,
        images: howto.images,
        extraInformation: howto.extraInformation,
      },
    };
  }
};

export default HowToPost;
