import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Listado_Categorias.css';
import CategoriasApi from "../../api/CategoriasApi";

export default function Listado_Categorias() {
    const [search, setSearch] = useState("");
    const [categorias, setCategorias] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const cargarCategorias = () => {
            const apiCategorias = CategoriasApi.getAll ? CategoriasApi.getAll() : [];
            const guardadas = JSON.parse(localStorage.getItem('categorias')) || [];
            const adaptadas = guardadas.map((c, idx) => {
                if (typeof c === 'string') {
                    return { id: 'local-' + (idx + 1), nombre: c, descripcion: '' };
                }
                return {
                    id: c.id || 'local-' + (idx + 1),
                    nombre: c.nombre || c,
                    descripcion: c.descripcion !== undefined ? c.descripcion : '',
                };
            });
            setCategorias([...apiCategorias, ...adaptadas]);
        };
        cargarCategorias();
        window.addEventListener('focus', cargarCategorias);
        return () => window.removeEventListener('focus', cargarCategorias);
    }, []);

    const filtered = categorias.filter(c =>
        c.nombre.toLowerCase().includes(search.toLowerCase()) ||
        c.descripcion.toLowerCase().includes(search.toLowerCase())
    );

    const Eliminar = (id) => {
        const nuevas = categorias.filter(c => c.id !== id);
        setCategorias(nuevas);
        
        const nuevasLocales = nuevas.filter(c => typeof c.id === 'string' && c.id.startsWith('local-'));
        localStorage.setItem('categorias', JSON.stringify(nuevasLocales.map(c => ({ nombre: c.nombre, descripcion: c.descripcion }))));
    };

    return (
        <>
            <h1>Listado Categorías</h1>
            <section className="search-bar-section">
                <input
                    type="text"
                    placeholder="Buscar una categoría..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <button className='bton_agrega' onClick={() => navigate('/Agregar_Producto')}> Agregar Categoría(+)</button>
            </section>
            <table className="productos-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map((c) => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.nombre}</td>
                            <td>{c.descripcion}</td>
                            <td>
                                <button className="Borrar" onClick={() => Eliminar(c.id)}>🗑️</button> 
                                <button className="Modificar">🖍️</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}