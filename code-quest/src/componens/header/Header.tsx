import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <h1>
        <Link href="/">
          <Image src="/logo.png" height={50} width={50} alt="Code Quest" />
          Quest of Code
        </Link>
      </h1>
    </header>
  );
};

export default Header;
