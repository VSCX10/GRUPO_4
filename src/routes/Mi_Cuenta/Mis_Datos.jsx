import React, { useState } from "react";
import "./Mis_Datos.css";

export default function MisDatos() {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const [nombre, setNombre] = useState(user.nombre || "");
  const [apellido, setApellido] = useState(user.apellido || "");
  const [correo, setCorreo] = useState(user.correo || user.email || "");

  const handleSave = (e) => {
    e.preventDefault();
    const updatedUser = { ...user, nombre, apellido, correo };

    localStorage.setItem("user", JSON.stringify(updatedUser));

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some(u => u.dni === user.dni || u.email === user.email || u.correo === user.correo);

    if (userExists) {
      const updatedUsers = users.map(u => {
        if (u.dni === user.dni || u.email === user.email || u.correo === user.correo) {
          return { ...u, nombre, apellido, correo };
        }
        return u;
      });
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    } else {
      users.push(updatedUser);
      localStorage.setItem("users", JSON.stringify(users));
    }

    alert("Datos actualizados");
  };

  return (
    <form className="user-form" onSubmit={handleSave}>
      <h2>Mis datos</h2>
      <div className="form-group">
        <label>Nombre</label>
        <input value={nombre} onChange={e => setNombre(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Apellido</label>
        <input value={apellido} onChange={e => setApellido(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input value={correo} onChange={e => setCorreo(e.target.value)} />
        <a href={`mailto:${correo}`} className="email-link"></a>
      </div>
      <button type="submit" className="guardar-btn">Guardar cambios</button>
    </form>
  );
}