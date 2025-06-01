import './Barra_2.css'
import { Link } from "react-router-dom";

const Barra_2 = () => {
    return (
        <nav className="segunda_barra">
            <div className="nav-contenido">
                <Link className="nav-link" to="/productos">Categorías</Link>
                <Link className="nav-link" to="/productos">
                    <button className="nav-btn">Productos</button>
                </Link>
                
                <Link className="nav-link" to="/conocenos">
                    <button className="nav-btn">Nosotros</button>
                
                </Link>
                <button className="ofertas">OFERTAS 👋</button>
            </div>
        </nav>
    );
}

export default Barra_2