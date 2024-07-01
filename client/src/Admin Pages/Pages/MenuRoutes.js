import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './SignIn';
import Orders from './Orders';
import Products from './Products';
import AddProduct from './AddProduct';

function MenuRoutes() {
  return (
   <>
   <Router>

<Routes>

<Route path="/" element={<SignIn/>}/>
<Route path="/Orders" element={<Orders/>}/>
<Route path="/Products" element={<Products/>}/>
<Route path="/AddProduct" element={<AddProduct/>}/>
<Route path="/SignIn" element={<SignIn/>}/>

</Routes>
 </Router>




   </>
  )
}

export default MenuRoutes
