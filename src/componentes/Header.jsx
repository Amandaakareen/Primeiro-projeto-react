import styles from "./Header.module.css";
import Logo from "../icon/Headersimbol.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="" />
      <div>Ignit Feed</div>
    </header>
  );
}
