import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Ordenes.css";

export default function Ordenes() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="ordenes-container">
      <h2>Órdenes recientes</h2>
      {orders.length === 0 ? (
        <p>No hay órdenes registradas.</p>
      ) : (
        <>
          <ul className="ordenes-list">
            {currentOrders.map((order) => (
              <li key={order.id} className="ordenes-list-item">
                <Link to={`/mi-cuenta/ordenes/${order.id}`}>
                  Orden #{order.id} - {order.fecha} - S/ {order.total}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`page-btn ${currentPage === index + 1 ? "active" : ""}`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}