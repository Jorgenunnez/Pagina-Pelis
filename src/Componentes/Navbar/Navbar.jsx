import estilos from "./Navbar.module.css";

function Navbar() {
  return (
    <navbar>
      <div>
        <img src="" alt="Logo" />
        <div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Peliculas</a>
            </li>
            <li>
              <a href="#">Series</a>
            </li>
          </ul>
          <form role="search">
            <input type="search" placeholder="Buscar" aria-label="search" />
            <button>Buscar</button>
          </form>
        </div>
      </div>
    </navbar>
  );
}

export default Navbar;
