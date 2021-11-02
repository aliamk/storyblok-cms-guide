import { useRouter } from "next/router";
import siteConfig from "../siteConfig";

const Toolbar = () => {
  const router = useRouter();

  return (
    <div className="toolbar">
      <div className="logo_container" onClick={() => router.push("/")}>
        <div className="logo"></div>
        <div className="site_name">{siteConfig.siteName}</div>
      </div>
    </div>
  );
};

export default Toolbar;
