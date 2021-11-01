import { useRouter } from "next/router";
import Image from "next/image";

const Footer = () => {
  const router = useRouter();

  return (
    <div className="footer">
      <div className="flex_container">
        <div className="c_1">
          ON
          <br />
          <a href="www.madebyon.com">madebyon.com</a>
        </div>
        <div className="c_2">
          Bureau, C3, Design District,
          <br />
          13 Soames Walk, London, SE10 0AX
        </div>
        <div className="c_3">hello@madebyon.com</div>
      </div>
    </div>
  );
};

export default Footer;
