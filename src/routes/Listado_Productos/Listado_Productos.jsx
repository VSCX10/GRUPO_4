import gamesApi from '../../api/gamesApi';
import './Listado_Productos.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Listado_Productos() {
    const produ = gamesApi.getAll ? gamesApi.getAll() : [];
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const adaptedprodu = produ.map(u => ({
        id: u.id,
        name: u.name,
        precio: u.precio,
        presentacion: u.publisher,
        descripcion: u.descripcion,
        stock: u.stock,
    }));


    const filtered = adaptedprodu.filter(u =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.descripcion.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
        
            <h1>Listado Productos</h1>
            
            <section className="search-bar-section">
                <input
                    type="text"
                    placeholder="Buscar un producto..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <button className='bton_agrega' onClick={() => navigate('/Agregar_Producto')}> Agregar Producto(+)</button>
            </section>
            <table className="productos-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Presentacion</th>
                        <th>Descripcion</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map((u) => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.presentacion}</td>
                            <td>{u.descripcion}</td>
                            <td>{u.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

