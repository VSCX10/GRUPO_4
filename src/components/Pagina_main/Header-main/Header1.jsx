import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import { useSearch } from "../../../context/SearchContext.jsx";
import './Header1.css';

const Header1 = () => {
  const { totalQuantity, cart } = useCart();
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm } = useSearch();

  useEffect(() => {
    const handleStorage = () => {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      navigate("/productos");
    }
  };

  return (
    <header>
      <div className="primera_barra">
        <a href="/" className="logo">
          Tiendas Jumi<span className="dot">●</span>
        </a>
        <section>
          <input
            type="text"
            placeholder="Buscar un producto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleSearch}
          />
          <button className="search-button" onClick={handleSearch}>
            🔍
          </button>
        </section>
        <div className="acciones">
          <div
            className="carrito-dropdown"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link className="carrito-link" to="/cart">
              🛒
              {totalQuantity > 0 && (
                <span className="carrito-contador">{totalQuantity}</span>
              )}
              <span style={{ marginLeft: 8 }}>
                S/{" "}
                {cart
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}{" "}
                | {totalQuantity}
              </span>
            </Link>
            {showDropdown && cart.length > 0 && (
              <div className="dropdown-lista-carrito">
                <ul>
                  {cart.map((item) => (
                    <li className="carrito-item" key={item.id}>
                      <span className="carrito-nombre">{item.name}</span> x
                      {item.quantity}
                      <span className="carrito-precio-unitario">
                        Unit: S/ {item.price}
                      </span>
                    </li>
                  ))}
                  <li className="carrito-total">
                    Total: S/{" "}
                    {cart
                      .reduce((acc, item) => acc + item.price * item.quantity, 0)
                      .toFixed(2)}
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="usuario-container">
            <button className="usuario">👤 Usuario</button>
            <div className="menu-desplegable">
              {user ? (
                <>
                  <Link to="/mi-cuenta">Mi Cuenta</Link>
                  <button
                    onClick={handleLogout}
                    className="cerrar-sesion-btn"
                  >
                    Cerrar Sesión
                  </button>
                </>
              ) : (
                <>
                  <Link to="/iniciar_sesion">Iniciar sesión</Link>
                  <Link to="/Registro">Registrarse</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header1;