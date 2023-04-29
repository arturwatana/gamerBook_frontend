import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <ul>
        <li className={style.item}>
          <FaFacebook />
        </li>
        <li className={style.item}>
          <FaInstagram />
        </li>
        <li className={style.item}>
          <FaGithub />
        </li>
      </ul>
      <p>Gamer Book - 2023</p>
    </footer>
  );
}

export default Footer;
