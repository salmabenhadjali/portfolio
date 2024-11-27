import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className="copyrights">
        ©2024 <span className="nowrap">Quest of Code.</span>
        <span className="nowrap"> All rights reserved</span>
      </div>
      <div className={styles.socials}>
        <Link
          className="nowrap"
          href="https://github.com/salmabenhadjali"
          target="_blank"
        >
          <div className={styles.imgContainer}>
            By Salma BHA
            <Image
              className={styles.icon}
              src="/logo-github.png"
              width={25}
              height={25}
              alt="github"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
