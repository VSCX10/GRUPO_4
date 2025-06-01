import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';


import { SearchProvider } from './context/SearchContext';
import { CartProvider } from './context/CartContext.jsx';


import Header1 from './components/Pagina_main/Header-main/Header1.jsx';
import Barra_2 from './components/Pagina_main/Barra_2/Barra_2.jsx';
import Footer from './components/Pagina_main/Footer/Footer.jsx';
import Layout from './Layout.jsx';


import App from './App.jsx';
import IniciarSesion from './routes/Iniciar_Sesion/AppIniciarSession/App1.jsx';
import App2 from './routes/Registarse/AppRegistrase/App2.jsx';
import OlvidarContraseña from './routes/Olvidar_Contrasen╠âa/AppOlvidarContrasen╠âa/OlvidarContrasen╠âa.jsx';
import Productos from './components/Pagina_main/Productos/Productos.jsx';
import Producto from './components/Pagina_main/Producto/Producto.jsx';
import ConoceMnos from './components/Pagina_main/enlances/conocenos.jsx';
import AtencionCliente from './components/Pagina_main/enlances/atencioncliente.jsx';
import DatosPersonales from './components/Pagina_main/enlances/datospersonales.jsx';
import App4 from './routes/Dashboard_Admin/AppDashboard/App4.jsx';
import Agregar_Producto from './routes/Agregar_Producto/AppAgregarProd/App5.jsx';
import Lista_Productos from './routes/Listado_Productos/App_Lista_Productos/App6.jsx';
import Lista_Categorias from './routes/Listado_Categorias/AppListaCategoria/App9.jsx';
import MiCuenta from './routes/Mi_Cuenta/Mi_Cuenta.jsx';
import Dashboard from './routes/Dashboard_Admin/Dashboard.jsx';
import ListaUsuarios from './routes/Admin/Lista_Usuarios.jsx';
import Cart from './components/Pagina_main/Cart/Cart.jsx';
import Checkout from './components/Pagina_main/Checkout/Checkout.jsx';
import RequireAdmin from './routes/RequireAdmin.jsx';


const MainLayout = () => {
  return (
    <div className="app-container">
      <Header1 />
      <Barra_2 />
      <main>
        <Outlet /> {}
      </main>
      <Footer />
    </div>
  );
};


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <App /> },
      { path: 'iniciar_sesion', element: <IniciarSesion /> },
      { path: 'Registro', element: <App2 /> },
      { path: 'mi-cuenta/*', element: <MiCuenta /> },
      { path: 'Olvidar_Contraseña', element: <OlvidarContraseña /> },
      { path: 'productos', element: <Productos /> },
      { path: 'productos/:productoId', element: <Producto /> },
      { path: 'conocenos', element: <ConoceMnos /> },
      { path: 'atencioncliente', element: <AtencionCliente /> },
      { path: 'datospersonales', element: <DatosPersonales /> },
      {
        path: 'Dashboard',
        element: (
          <RequireAdmin>
            <Layout>
              <Dashboard />
            </Layout>
          </RequireAdmin>
        ),
      },
      {
        path: 'Agregar_Producto',
        element: (
          <RequireAdmin>
            <Layout>
              <Agregar_Producto />
            </Layout>
          </RequireAdmin>
        ),
      },
      {
        path: 'Lista_Productos',
        element: (
          <RequireAdmin>
            <Layout>
              <Lista_Productos />
            </Layout>
          </RequireAdmin>
        ),
      },
      {
        path: 'Lista_Categorias',
        element: (
          <RequireAdmin>
            <Layout>
              <Lista_Categorias />
            </Layout>
          </RequireAdmin>
        ),
      },
      { path: 'cart', element: <Cart /> },
      {
        path: 'checkout',
        element: (
          <Layout>
            <Checkout />
          </Layout>
        ),
      },
      {
        path: 'mi-cuenta/*',
        element: (
          <Layout>
            <MiCuenta />
          </Layout>
        ),
      },
      {
        path: 'lista_usuarios',
        element: (
          <RequireAdmin>
            <Layout>
              <ListaUsuarios />
            </Layout>
          </RequireAdmin>
        ),
      },
    ],
  },
]);

// Render Application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchProvider>      
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
    </SearchProvider>
  </StrictMode>
);