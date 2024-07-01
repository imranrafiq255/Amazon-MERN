import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Link } from 'react-router-dom'; 
function Products() {
  return (
    <>
    
    <Header />
 <body id="reportsPage">
   
   <div class="container mt-5">
     <div class="row tm-content-row">
       <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 tm-block-col">
         <div class="tm-bg-primary-dark tm-block tm-block-products">
           <div class="tm-product-table-container">
             <table class="table table-hover tm-table-small tm-product-table">
               <thead>
                 <tr>
                   
                   <th scope="col">PRODUCT NAME</th>
                   <th scope="col">PRICE</th>
                   <th scope="col">CATEGORY</th>
                   <th scope="col">TYPE</th>
                   <th scope="col">&nbsp;</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   
                   <td class="tm-product-name">100% Cotton Premium socks </td>
                   <td>1,450</td>
                   <td>Clothing</td>
                   <td>Socks and ties</td>
                   
                 </tr>
                 <tr>
                   
                   <td class="tm-product-name">100% Cotton Premium socks </td>
                   <td>1,450</td>
                   <td>Clothing</td>
                   <td>Socks and ties</td>
                   
                 </tr> <tr>
                   
                   <td class="tm-product-name">100% Cotton Premium socks </td>
                   <td>1,450</td>
                   <td>Clothing</td>
                   <td>Socks and ties</td>
                   
                 </tr> <tr>
                   
                   <td class="tm-product-name">100% Cotton Premium socks </td>
                   <td>1,450</td>
                   <td>Clothing</td>
                   <td>Socks and ties</td>
                   
                 </tr> <tr>
                   
                   <td class="tm-product-name">100% Cotton Premium socks </td>
                   <td>1,450</td>
                   <td>Clothing</td>
                   <td>Socks and ties</td>
                   
                 </tr> <tr>
                   
                   <td class="tm-product-name">100% Cotton Premium socks </td>
                   <td>1,450</td>
                   <td>Clothing</td>
                   <td>Socks and ties</td>
                   
                 </tr> <tr>
                   
                   <td class="tm-product-name">100% Cotton Premium socks </td>
                   <td>1,450</td>
                   <td>Clothing</td>
                   <td>Socks and ties</td>
                   
                 </tr> <tr>
                   
                   <td class="tm-product-name">100% Cotton Premium socks </td>
                   <td>1,450</td>
                   <td>Clothing</td>
                   <td>Socks and ties</td>
                   
                 </tr> <tr>
                   
                   <td class="tm-product-name">100% Cotton Premium socks </td>
                   <td>1,450</td>
                   <td>Clothing</td>
                   <td>Socks and ties</td>
                   
                 </tr> <tr>
                   
                   <td class="tm-product-name">100% Cotton Premium socks </td>
                   <td>1,450</td>
                   <td>Clothing</td>
                   <td>Socks and ties</td>
                   
                 </tr> <tr>
                   
                   <td class="tm-product-name">100% Cotton Premium socks </td>
                   <td>1,450</td>
                   <td>Clothing</td>
                   <td>Socks and ties</td>
                   
                 </tr>
               </tbody>
             </table>
           </div>
         
           <Link to='/AddProduct'
            
             class="btn btn-primary btn-block text-uppercase mb-3">Add new product</Link>
           
         </div>
       </div>
      
        
           
          
     </div>
   </div>

 </body>
      

      <Footer />
    </>
  )
}

export default Products
