import React from 'react'
import { Link } from 'react-router-dom'
import "./cartstyle.css"
const Success = () => {
  return (
       

      <div class="modal-dialog modal-confirm">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
        <div class="modal-content">
          <div class="modal-header justify-content-center">
            <div class="icon-box">
               <i class="fab fa-amazon-pay"></i>
            </div>
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          </div>
          <div class="modal-body text-center">
            <h4>Great!</h4>
            <p>Your account has been created successfully.</p>
            <Link to="/" class="btn btn-success" data-dismiss="modal"><span class="home__back">Home page <i class="fas fa-home">  </i></span> </Link>
          </div>
        </div>
      </div>
    
  )
}

export default Success