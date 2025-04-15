import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { useState } from 'react'
import { IS_DEVELOPMENT } from './config.js'
import { useFilters } from './hooks/useFilters.js'


function App() {
  const [products] = useState(initialProducts)

  const { filters, filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header></Header>
      <Products products={filteredProducts}></Products>
      {IS_DEVELOPMENT && <Footer></Footer>}
    </>
  )
}

export default App
