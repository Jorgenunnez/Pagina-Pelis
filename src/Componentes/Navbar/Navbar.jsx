import estilos from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={estilos.container}>
      <div className={estilos.headerleft}>
        <img src="" alt="Logo" className={estilos.logo} />
      </div>
      <div className={estilos.headermid}>
        <nav>
          <ul>
            <li>
              <a href="#">Peliculas</a>
            </li>
            <li>
              <a href="#">Series</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={estilos.headeright}>
        <form role="search">
          <input type="search" placeholder="Buscar" aria-label="search" />
          <button>Buscar</button>
        </form>
      </div>
    </div>
  );
}

export default Navbar;
