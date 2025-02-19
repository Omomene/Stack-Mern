import { Link, NavLink } from "react-router-dom";

import "./App.css";
import Accueil from "./pages/accueil/Accueil";
import Detail from "./pages/Detail/Detail";
import ErrorPage from "./pages/404/ErrorPage";
import RoutesPosts from "./Router/RoutesPosts";
import Bouton from "./components/bouton/Bouton";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          Home Page
        </NavLink>
        |
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/detail"
        >
          Articles
        </NavLink>
      </nav>
      <RoutesPosts />
      <Footer />

    </>
  );
}

export default App;
