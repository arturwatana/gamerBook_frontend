import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../../img/kisspng-women-and-video-games-gamer-elite-dangerous-logo-gamer-5b4ad958574068.4728244315316319603574.png";
function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img src={logo}></img>
      </Link>
      <h1>Gamer Book</h1>
      <ul>
        <li className={styles.item}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.item}>
          <Link to="/players">Players</Link>
        </li>
        <li className={styles.item}>
          <Link to="/games">Games</Link>
        </li>
        <li className={styles.item}>
          <Link to="/contact">Contact</Link>
        </li>
        <li className={styles.item}>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
