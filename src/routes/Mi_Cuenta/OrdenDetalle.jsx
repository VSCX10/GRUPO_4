import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./OrdenDetalle.css";

export default function OrdenDetalle() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const order = orders.find((order) => order.id === parseInt(id));

  if (!order) {
    return <p>Orden no encontrada.</p>;
  }

  const handleCancelOrder = () => {
    const updatedOrders = orders.filter((order) => order.id !== parseInt(id));
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    alert("Orden cancelada.");
    navigate("/mi-cuenta/ordenes");
  };

  const handleContinueShopping = () => {
    navigate("/checkout");
  };

  return (
    <div className="orden-detalle-container">
      <h2>Detalle de la Orden</h2>
      <p><strong>ID:</strong> {order.id}</p>
      <p><strong>Fecha:</strong> {order.fecha}</p>
      <p><strong>Total:</strong> S/ {order.total}</p>
      <h3>Productos</h3>
      <ul>
        {order.productos.map((producto, index) => (
          <li key={index}>
            {producto.name} - Cantidad: {producto.quantity} - Precio: S/ {producto.price}
          </li>
        ))}
      </ul>
      <div className="orden-detalle-buttons">
        <button onClick={handleCancelOrder} className="cancel-order-btn">
          Cancelar Orden
        </button>
        <button onClick={handleContinueShopping} className="continue-shopping-btn">
          Seguir Comprando
        </button>
      </div>
    </div>
  );
}