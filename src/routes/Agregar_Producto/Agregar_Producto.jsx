import React, { useEffect, useRef, useState } from 'react';
import "./Agregar.css";

const AgregarProducto = () => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [modalAbierto, setModalAbierto] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevaDescripcion, setNuevaDescripcion] = useState('');
  const [archivoNombre, setArchivoNombre] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {
    const guardadas = JSON.parse(localStorage.getItem('categorias')) || [];
    setCategorias(guardadas);
  }, []);

  const manejarCambioArchivo = (e) => {
    if (e.target.files.length > 0) {
      setArchivoNombre(`Archivo seleccionado: ${e.target.files[0].name}`);
    } else {
      setArchivoNombre('');
    }
  };

  const agregarCategoria = () => {
    if (!nuevoNombre.trim()) {
      alert('El nombre de la categoría es obligatorio');
      return;
    }
    const nombre = nuevoNombre.trim();
    
    const existe = categorias.some(c => (typeof c === 'string' ? c === nombre : c.nombre === nombre));
    if (existe) {
      alert('La categoría ya existe');
      return;
    }
    
    const nuevaCategoria = { nombre, descripcion: nuevaDescripcion.trim() };
    const nuevas = [...categorias, nuevaCategoria];
    setCategorias(nuevas);
    
    const prev = JSON.parse(localStorage.getItem('categorias')) || [];
    const nuevasLocales = prev.concat([nuevaCategoria]);
    localStorage.setItem('categorias', JSON.stringify(nuevasLocales));
    setCategoriaSeleccionada(nombre.toLowerCase().replace(/\s+/g, '-'));
    setNuevoNombre('');
    setNuevaDescripcion('');
    setModalAbierto(false);
  };

  const borrarCategoria = () => {
    if (!categoriaSeleccionada) {
      alert('Selecciona una categoría para borrar');
      return;
    }

    const categoriaTexto = categorias.find(c => c.toLowerCase().replace(/\s+/g, '-') === categoriaSeleccionada);
    const confirmacion = window.confirm(`¿Estás seguro de borrar la categoría "${categoriaTexto}"?`);
    if (!confirmacion) return;

    const nuevas = categorias.filter(c => c !== categoriaTexto);
    setCategorias(nuevas);
    setCategoriaSeleccionada('');
    localStorage.setItem('categorias', JSON.stringify(nuevas));
  };

  return (
    <main>
      <h1>Agregar un producto</h1>
      <div className="container agregar-flex-container">
        <article className="agregar-form-col">
          <form>
            <label htmlFor="nombre">Nombre del producto</label>
            <input type="text" id="nombre" name="nombre" placeholder="Nombre del producto" required />

            <label htmlFor="presentacion">Presentación</label>
            <input type="text" id="presentacion" name="presentacion" placeholder="Presentación" required />

            <label htmlFor="categoria">Categoría</label>
            <div className="categorias">
              <select
                id="categoria"
                name="categoria"
                value={categoriaSeleccionada}
                onChange={(e) => setCategoriaSeleccionada(e.target.value)}
              >
                <option disabled value="">Seleccione la categoría del producto</option>
                {categorias.map((c, i) => {
                  const nombre = typeof c === 'string' ? c : c.nombre;
                  return (
                    <option key={i} value={nombre.toLowerCase().replace(/\s+/g, '-')}>{nombre}</option>
                  );
                })}
              </select>
              <button type="button" className="boton_agregar" onClick={() => setModalAbierto(true)}>+</button>
              <button type="button" className="boton_borrar" onClick={borrarCategoria}>🗑</button>
            </div>

            <label htmlFor="descripcion">Descripción</label>
            <textarea id="descripcion" name="descripcion" placeholder="Descripción del producto..." required></textarea>
          </form>
        </article>

        <article className="agregar-img-col">
          <label>Imagen</label>
          <div className="imagen-zona">
            <p>Arrastra la imagen a esta zona</p>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              style={{ display: 'none' }}
              onChange={manejarCambioArchivo}
            />
            <button type="button" onClick={() => fileInputRef.current.click()}>Seleccionar imagen</button>
            <p>{archivoNombre}</p>
          </div>

          <section>
            <label id="TitleStock">Stock</label><br />
            <input type="number" id="stock" name="stock" placeholder="Stock" min="0" />
            <button className="boton-crear">Crear producto</button>
          </section>
        </article>
      </div>

      {modalAbierto && (
        <div id="modalCategoria" className="modal" onClick={(e) => {
          if (e.target.id === "modalCategoria") setModalAbierto(false);
        }}>
          <div className="modal-content">
            <h2>Nueva categoría</h2>
            <label>Nombre</label>
            <input
              type="text"
              value={nuevoNombre}
              onChange={(e) => setNuevoNombre(e.target.value)}
              placeholder="Nombre de la categoría"
            />
            <label>Descripción</label>
            <textarea
              value={nuevaDescripcion}
              onChange={(e) => setNuevaDescripcion(e.target.value)}
              placeholder="Descripción del producto..."
            />
            <button id="crearCategoriaBtn" onClick={agregarCategoria}>Crear categoría</button>
          </div>
        </div>
      )}
    </main>
  );
};

export default AgregarProducto;
