import React from "react";
import "./NewSeries.css";

const NewSeries = () => {
  return (
    <section className="new-series-section">
      <h2 className="new-series-title">Series nuevas</h2>
      <div className="new-series-grid">
        <div className="new-series-card">
          <h3>Limpieza</h3>
          <img
            className="new-series-image"
            src="public/img/composicion-botellas-color-detergente-imagenes-realistas-botellas-colores-llenas-jabon-lavar-sombras_1284-33064.jpg.avif"
            alt="Limpieza"
          />
          <p>
            Soluciones químicas que se utilizan para eliminar la suciedad y las manchas de las superficies interiores
          </p>
        </div>
        <div className="new-series-card">
          <h3>Aseo personal</h3>
          <img
            className="new-series-image"
            src="public/img/depositphotos_9155074-stock-photo-assorted-toiletries.jpg"
            alt="Aseo personal"
          />
          <p>
            Productos y servicios que ayudan a los clientes a mantener su higiene y cuidado personal
          </p>
        </div>
        <div className="new-series-card">
          <h3>Artefactos</h3>
          <img
            className="new-series-image"
            src="public/img/GettyImages-513631128-compressed-1024x768.jpg"
            alt="Artefactos"
          />
          <p>
            Productos que funcionan con electricidad, diseñados para facilitar tareas cotidianas o proporcionar entretenimiento
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewSeries;