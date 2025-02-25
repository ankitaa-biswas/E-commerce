import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
import Product from './pages/Product'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';




const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] 1g:px-[9vw]'>
      <ToastContainer  />
      <Navbar/>
      <SearchBar/>
      <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/collection' element={<Collection/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/orders' element={<Orders/>}/>
  <Route path='/product/:productId' element={<Product/>}/>
  <Route path='/profile' element={<Profile/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/place-order' element={<PlaceOrder/>}/>

      </Routes>
<Footer/>
    </div>
  )
}

export default App