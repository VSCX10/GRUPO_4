import { useState } from "react";
import React from 'react';
import "./Dashboard.css";
import UserApi from '../../api/UserApi';

const orders = [
  { id: "#1234", user: "Alejandro Ruiz", date: "20/01/2025", total: "S/199.00", estado: "Entregado" },
  { id: "#1235", user: "Juan Perez", date: "22/01/2025", total: "S/249.00", estado: "Pendiente" },
  { id: "#1236", user: "Ana Díaz", date: "23/01/2025", total: "S/149.00", estado: "Entregado" },
  { id: "#1237", user: "Carlos López", date: "24/01/2025", total: "S/299.00", estado: "Cancelado" },
];

export default function Dashboard() {
  const users = UserApi.getAll ? UserApi.getAll() : [];


  const adaptedUsers = users.map(u => ({
    name: `${u.nombre} ${u.apellido}`,
    email: u.correo,
    estado: u.estado,
    fecha: u.fechaCreacion,
    avatar: "https://randomuser.me/api/portraits/men/1.jpg" 
  }));

  const [selectedUser, setSelectedUser] = useState(adaptedUsers[0] || {});

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>

      <div className="summary-cards">
        <div className="card">
          <div className="card-label">Órdenes</div>
          <div className="card-value">68</div>
        </div>
        <div className="card">
          <div className="card-label">Usuarios nuevos</div>
          <div className="card-value">{adaptedUsers.length}</div>
        </div>
        <div className="card">
          <div className="card-label">Ingresos totales</div>
          <div className="card-value">S/2348.00</div>
        </div>
      </div>

      <div className="main-section">
        <div className="usuarios-registrados">
          <div className="section-header">
            <h3>Usuarios registrados</h3>
            <button className="btn-red">Ver todos los usuarios</button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {adaptedUsers.map((u, index) => (
                <tr key={index}>
                  <td>{u.name}</td>
                  <td className={u.estado === "Activo" ? "estado-activo" : "estado-inactivo"}>{u.estado}</td>
                  <td>
                    <button className="btn-outline">
                      {u.estado === "Activo" ? "Desactivar" : "Activar"}
                    </button>
                    <button className="btn-outline" onClick={() => setSelectedUser(u)}>Ver detalle</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="detalle-usuario">
          <h3>Detalle del usuario</h3>
          <div className="detalle">
            <div className="detalle-header">
              {selectedUser.avatar && <img className="avatar" src={selectedUser.avatar} alt={selectedUser.name} />}
              <div>
                <p><strong>{selectedUser.name}</strong></p>
                <p>Correo: {selectedUser.email}</p>
                <p>Fecha de registro: {selectedUser.fecha}</p>
                <p>Estado: {selectedUser.estado}</p>
              </div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>#ID</th>
                  <th>Fecha</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o, idx) => (
                  <tr key={idx}>
                    <td className="text-red">{o.id}</td>
                    <td>{o.date}</td>
                    <td>{o.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}