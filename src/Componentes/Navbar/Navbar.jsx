import estilos from "./Navbar.module.css";
import logo from "../../assets/logo.svg";

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
        <div>
          <a href="">Peliculas</a>
          <a href="">Series</a>
        </div>
        <div>
          <form action="">
            <input type="search" placeholder="Buscar" aria-label="buscar" />
            <button type="submit">buscar</button>
          </form>
        </div>
      </navcontainer>
    </>
  );
}

export default Navbar;
