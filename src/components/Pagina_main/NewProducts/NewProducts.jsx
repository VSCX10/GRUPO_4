import React, { useState } from "react";
import './NewProducts.css'; 
import { useCart } from "../../../context/CartContext";

const products = [
  { id: 1, name: "Sandia", price: 9.90, image: "public/img/0dc67fac1b72005efd83e64d8f28de5386ba8a76.png" },
  { id: 2, name: "Papaya", price: 12.50, image: "public/img/01c107ed036de327cb02b5d85900ee783aa47c07.png" },
  { id: 3, name: "Naranja", price: 7.30, image: "public/img/95c20b015c660121c6d938dbdd050055e385ad9a.png" },
  { id: 4, name: "Manzana", price: 15.00, image: "public/img/75faaca25dee36474600328830a3ad2a0da4aa9b.png" },
  { id: 5, name: "Pera", price: 4.80, image: "public/img/31c8c84eab895d9e9f98e701464d49279a7dcb9d.png" },
  { id: 6, name: "Uva", price: 11.20, image: "public/img/4345a46bc713ae382b27117b99dd5293bd24e581.png" },
];

function NewProducts() {
  const { addItem } = useCart();
  const [showMenu, setShowMenu] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleAddClick = (prod) => {
    setSelectedProduct(prod);
    setQuantity(1);
    setShowMenu(true);
  };

  const handleConfirm = () => {
    addItem(selectedProduct, quantity);
    setShowMenu(false);
    setSelectedProduct(null);
  };

  return (
    <section className="newproducts-section">
      <h2 className="newproducts-title">Productos nuevos</h2>
      <div className="newproducts-grid">
        {products.map((product) => (
          <div className="newproduct-card" key={product.id}>
            <div className="newproduct-img-container">
              <img src={product.image} alt={product.name} />
            </div>
            <h4 className="newproduct-name">{product.name}</h4>
            <p className="newproduct-price">S/ {product.price}</p>
            <button
              className='bton_Agregar'
              onClick={() => handleAddClick(product)}
            >
              Agregar
            </button>
          </div>
        ))}
      </div>
      {showMenu && (
        <div className="cantidad-menu">
          <div className="cantidad-menu-content">
            <h4>¿Cuántos deseas llevar?</h4>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={e => setQuantity(Number(e.target.value))}
              style={{ width: "60px", marginRight: "10px" }}
            />
            <button onClick={handleConfirm}>Confirmar</button>
            <button onClick={() => setShowMenu(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default NewProducts;