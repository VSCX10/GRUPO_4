import "./Mi_Cuenta.css";
import React, { useEffect, useState } from "react";
import { useNavigate, Routes, Route, Link, useLocation } from "react-router-dom";
import Ordenes from "./Ordenes.jsx";
import OrdenDetalle from "./OrdenDetalle.jsx";
import MisDatos from "./Mis_Datos.jsx";
import CambiarContraseña from "./Cambiar_Contrasen╠âa.jsx";
import { Outlet } from "react-router-dom";

function AdminDashboardResumen() {

  const today = new Date().toISOString().slice(0, 10);
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);


  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const users = JSON.parse(localStorage.getItem("users")) || [];


  const filteredOrders = orders.filter(o => o.date >= startDate && o.date <= endDate);
  const filteredUsers = users.filter(u => (u.fechaCreacion || u.fecha) >= startDate && (u.fechaCreacion || u.fecha) <= endDate);

  const ingresosTotales = filteredOrders.reduce((sum, o) => sum + (parseFloat(o.total) || 0), 0);

  return (
    <div className="admin-dashboard-resumen">
      <h2>Resumen del día</h2>
      <form className="periodo-form">
        <label>Desde: <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} /></label>
        <label>Hasta: <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} /></label>
      </form>
      <div className="summary-cards">
        <div className="card">
          <div className="card-label">Órdenes</div>
          <div className="card-value">{filteredOrders.length}</div>
        </div>
        <div className="card">
          <div className="card-label">Usuarios nuevos</div>
          <div className="card-value">{filteredUsers.length}</div>
        </div>
        <div className="card">
          <div className="card-label">Ingresos totales</div>
          <div className="card-value">S/{ingresosTotales.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}

export default function MiCuenta() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/iniciar-sesion");
    }
    
    if (user?.rol === "admin" && location.pathname === "/mi-cuenta") {
      navigate("/mi-cuenta/mis-datos", { replace: true });
    }
  }, [navigate, user, location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="mi-cuenta-container">
      <nav className="mi-cuenta-nav">
        {user?.rol === "admin" ? (
          <>
            <Link to="/mi-cuenta/mis-datos" className={location.pathname === "/mi-cuenta/mis-datos" ? "active-admin-btn" : ""}>Mis datos</Link>
            <Link to="/dashboard" className="admin-btn">Dashboard</Link>
            <Link to="/lista_usuarios" className="admin-btn">Lista de Usuarios</Link>
            <Link to="/Lista_Categorias" className="admin-btn">Lista de Categorías</Link>
            <Link to="/Lista_Productos" className="admin-btn">Lista de Productos</Link>
            
          </>
        ) : (
          <>
            <Link to="/mi-cuenta/ordenes">Órdenes</Link>
            <Link to="/mi-cuenta/mis-datos">Mis datos</Link>
            <Link to="/mi-cuenta/cambiar-contraseña">Cambiar contraseña</Link>
          </>
        )}
        <button onClick={handleLogout}>Cerrar sesión</button>
      </nav>
      <div className="mi-cuenta-section">
        <Routes>
          {user?.rol === "admin" ? (
            <>
              <Route path="mis-datos" element={<MisDatos />} />
              <Route index element={<AdminDashboardResumen />} />
            </>
          ) : (
            <>
              <Route path="ordenes" element={<Ordenes />} />
              <Route path="ordenes/:id" element={<OrdenDetalle />} />
              <Route path="mis-datos" element={<MisDatos />} />
              <Route path="cambiar-contraseña" element={<CambiarContraseña />} />
              <Route index element={<Ordenes />} />
            </>
          )}
        </Routes>
        <Outlet />
      </div>
    </div>
  );
}