import { useRouter } from "next/router";

const Toolbar = () => {
  const router = useRouter();

  return (
    <div className="toolbar">
      <div className="logo_container" onClick={() => router.push("/")}>
        <div className="logo"></div>
        <div className="site_name">ON x Cervest - Storyblok CMS Guide</div>
      </div>
    </div>
  );
};

export default Toolbar;
