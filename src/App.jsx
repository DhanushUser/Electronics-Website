import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Section from './Components/Section'
import TopProducts from './Components/TopProducts'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Cart from './Components/Cart'
import camera from './assets/camera.png'
import machine from './assets/machine.png'
import iron from './assets/iron.png'
import pc from './assets/pc.png'

function App() {

  const initialProducts = [
    { id: 1, name: 'Nikon 1200D', price: 870, img: camera, onSale: true, inCart: false },
    { id: 2, name: 'LG washing Machine', price: 870, img: machine, onSale: true, inCart: false },
    { id: 3, name: 'Iron box', price: 870, img: iron, onSale: true, inCart: false },
    { id: 4, name: 'Dell Latitude 1D', price: 870, img: pc, onSale: true, inCart: false },
  ];

  const [products, setProducts] = useState(initialProducts);

  const handleCart = (id) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, inCart: !product.inCart } : product
    ));
  };

  const cartItems = products.filter(product => product.inCart);
  

  return (
    <>
     <Navbar />
     <Hero />
     <Section />
     <TopProducts products={products} handleCart={handleCart} />
     <Footer />

     <Routes>
      <Route path='cart' element={ <Cart cartItems={cartItems} /> } />
     </Routes>
    </>
  )
}

export default App
