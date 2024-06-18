import estilos from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <navcontainer className={estilos.container}>
        <img src="" alt="Logo" className={estilos.logo} />
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
