import { sanityClient, PortableText } from "../../sanity";
import Image from "../../components/Image";

const HowToPost = ({
  pageTitle,
  slug,
  id,
  howToIntroduction,
  mainImage,
  images,
  extraInformation,
}) => {
  return (
    <>
      <div className="main_container">
        <h1>{pageTitle}</h1>
        <div className="main_image_container">
          <PortableText blocks={howToIntroduction} className="intro" />
          <Image identifier="main-image" image={mainImage} alt="" />
        </div>
        {images && (
          <div className="guide_images">
            {images.map(({ _key, asset, topCaption }, image) => (
              <div key={_key} className="guide_image">
                <PortableText blocks={topCaption} />
                <Image key={_key} identifier="image" image={asset} alt="" />
              </div>
            ))}
          </div>
        )}
        <PortableText blocks={extraInformation} className="instructions" />
      </div>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[ _type == "howto" && slug.current == $pageSlug][0]{
    pageTitle,
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
        pageTitle: howto.pageTitle,
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
