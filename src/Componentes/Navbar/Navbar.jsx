import estilos from "./Navbar.module.css";
import logo from "../../assets/logo.svg";
import BurgerButton from "./Burgerbutton/BurgerButton";

function Navbar() {
  return (
    <>
      <navcontainer className={estilos.container}>
        <div className={estilos.logo}>
          <img src={logo} alt="Logo" className={estilos.logo} />
          <h2>
            Fua<span>Movies</span>
          </h2>
        </div>
        <div className={estilos.links}>
          <a href="">Peliculas</a>
          <a href="">Series</a>
        </div>
        <div className={estilos.links}>
          <form action="">
            <input type="search" placeholder="Buscar" aria-label="buscar" />
            <button type="submit">buscar</button>
          </form>
        </div>
        <div className={estilos.burger}>
          <BurgerButton />
        </div>
      </navcontainer>
    </>
  );
}

export default Navbar;
