import './App.css'
import Banner from './components/Pagina_main/Banner/Banner.jsx'
import Categories from './components/Pagina_main/Categories/categories.jsx' 
import MostSold from './components/Pagina_main/MostSold/MostSold.jsx'
import NewSeries from './components/Pagina_main/NewSeries/NewSeries.jsx'
import NewProducts from './components/Pagina_main/NewProducts/NewProducts.jsx'

function App() {
  return (
    <>
      <Banner />
      <Categories />
      <MostSold />  
      <NewSeries />
      <NewProducts />
    </>
  )
}

export default App
