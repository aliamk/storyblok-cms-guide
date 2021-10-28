import { useRouter } from "next/router";
import Image from "next/image";

// export const Footer = () => {
//   const router = useRouter();

//   return (
//     <div className={styles.main}>
//       <div onClick={() => router.push("/")} className={styles.logo_container}>
//         <Image
//           src="/images/logo.png"
//           alt="Picture of the author"
//           layout="fill"
//         />
//       </div>
//       <h1>Cervest - Storyblok CMS guide</h1>
//       {/* <div onClick={() => (window.location.href = "https://github.com/aliamk")}>
//         Twitter
//       </div>
//       <div onClick={() => (window.location.href = "https://github.com/aliamk")}>
//         GitHub
//       </div> */}
//     </div>
//   );
// };

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
