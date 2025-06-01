import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cambiar_Contrasen╠âa.css";

export default function CambiarContraseña() {
  const [nueva, setNueva] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nueva || !confirmar) {
      alert("Por favor, completa ambos campos.");
      return;
    }
    if (nueva !== confirmar) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      user.password = nueva;
      user.contraseña = nueva; 
      localStorage.setItem("user", JSON.stringify(user));

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = users.map(u =>
        (u.email || u.correo) === (user.email || user.correo)
          ? { ...u, password: nueva, contraseña: nueva }
          : u
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }

    alert("Contraseña cambiada exitosamente.");
    navigate("/mi-cuenta/mis-datos");
  };

  return (
    <form className="cambiar-form" onSubmit={handleSubmit}>
      <h2>Cambiar contraseña</h2>
      <div className="form-group">
        <input
          type="password"
          placeholder="Nueva contraseña"
          value={nueva}
          onChange={e => setNueva(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Confirmar contraseña"
          value={confirmar}
          onChange={e => setConfirmar(e.target.value)}
        />
      </div>
      <button className="guardar-btn" type="submit">Cambiar</button>
    </form>
  );
}