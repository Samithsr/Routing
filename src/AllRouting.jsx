import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Components/Home'
import Products from './Components/Products'
import Admin from './Components/Admin'
import Article from './Components/Article'
import Notfound from './Components/Notfound'
import SingleProduct from './Components/SingleProduct'
import Sales from './Components/Sales'
import Sellers from './Components/Sellers'

const AllRouting = () => {
  return (
    <Routes>
        <Route  path='/'element={<Home />} /> 
        <Route  path='/products'element={<Products />} /> 
        <Route  path='/article'element={<Article/>} /> 
        <Route  path='/products/:id' element={<SingleProduct />} />
        <Route  path='/admin'element={<Admin />}>
          <Route  path="/admin/sales" element={<Sales />} />
          <Route  path="/admin/sellers" element={<Sellers />} />
        </Route>
        <Route  path='*'element={<Notfound />} /> 
        </Routes>
  )
}

export default AllRouting