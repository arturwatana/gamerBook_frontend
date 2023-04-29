import ContextContainer from "../Layout/ContextContainer";
import style from "./Home.module.css";
import logo from "../../img/kisspng-women-and-video-games-gamer-elite-dangerous-logo-gamer-5b4ad958574068.4728244315316319603574.png";
import gamerPlaying from "../../img/Quarto-gamer-700x409_1.png";
function Home() {
  return (
    <>
      <ContextContainer>
        <div className={style.firstPhoto}>
          <img src={logo}></img>
          <h2>Cadastre-se na maior plataforma gamer do Brasil!</h2>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className={style.secondPhoto}>
          <img src={gamerPlaying}></img>
        </div>
      </ContextContainer>
    </>
  );
}

export default Home;
