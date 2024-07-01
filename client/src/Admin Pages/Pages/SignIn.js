import React from 'react'
import Footer from '../Common/Footer'
import { Link } from 'react-router-dom'; 

function SignIn() {
  return (
   <>
   
   <div class="d-flex flex-row justify-content-center">
        <div class="row">
          <div class="col-md">
            <img class="img_1" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo"/>
          </div>
        </div>
      </div>

   
    
      <div class="d-flex flex-row justify-content-center">
        <div class="row">
          <div class="col-md">
           <form>
             <div class="sign-in" >Sign In</div>          
  <div class="form-group">
    <label id="words_1" for="exampleInputEmail1">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style={{color:"white"}}/>
    <small id="emailHelp" class="form-text text-muted"></small>
  </div>
  <div class="form-group">
    <label id="words_2" for="exampleInputPassword1">Password                 </label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
    <div class="form-group">
        <Link to='/Orders'>
      <button type="button" class="btn btn-warning" id="sign-in" style={{Align: "center"}}>Sign In</button>
      </Link>
       
      
    </div>
  </div>
  <div class="form-check">
   
    
  </div>
  
  
</form> 
          </div>
        </div>
      </div>

      
      
      

<Footer/>



   
   
   
   </>
  )
}

export default SignIn
