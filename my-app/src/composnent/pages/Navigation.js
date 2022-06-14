import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {LoginContext} from '../../context/LoginContext'

function Navigation() {
  
    return(

        <div class="navigation">
            <ul class="dsnv">
              <li>

                <a >
                  <span class="icon-brand"><i class="fab fa-apple"></i></span>
                  <span class="title-brand"><h2>Alan</h2></span>
                </a>
              </li>



              <li>
                <a>
                  <span class="icon"><i class="fas fa-home"></i></span>
                  <Link class="title" to='/dashboard'>Dashboard</Link>
                </a>
              </li>

              <li>
                <a>
                  <span class="icon"><i class="fas fa-user"></i></span>
                  <Link to='/dashboard/testpage' class="title">Customers</Link>
                </a>
              </li>

              <li>
                <a>
                  <span class="icon"><i class="fab fa-product-hunt"></i></span>
                  <Link to="/dashboard/product" class="title">Products</Link>
                </a>
              </li>

              <li>
                <a>
                  <span class="icon"><i class="fas fa-align-justify"></i></span>
                  <Link to="/dashboard/category" class="title">Category</Link>
                </a>
              </li>

              <li>
                <a>
                  <span class="icon"><i class="fas fa-store"></i></span>
                  <Link to='/dashboard/orders' class="title">Orders</Link>
                </a>
              </li>

              <li>
                <a>
                  <span class="icon"><i class="fas fa-home"></i></span>
                  <Link to='/' class="title">Home</Link>
                </a>
              </li>

              <li>
                <Link to="/login">
                  <span class="icon"><i class="fas fa-sign-out-alt"></i></span>
                  <span class="title">Sign out</span>
                </Link>
              </li>


            </ul>
          </div>
    )
    
}

export default Navigation