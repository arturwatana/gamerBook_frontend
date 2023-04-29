import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import NavBar from "./components/Layout/NavBar";
import PlayersPage from "./components/pages/PlayersPage";
import GamesPage from "./components/pages/GamesPage";
import ContactPage from "./components/pages/ContactPage";
import AboutPage from "./components/pages/AboutPage";
import Container from "./components/Layout/Container";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Container customClass="minHeight">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/players" element={<PlayersPage />}></Route>
            <Route path="/games" element={<GamesPage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;
