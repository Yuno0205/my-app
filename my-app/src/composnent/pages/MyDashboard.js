import { useEffect, useContext } from 'react';
import { Route, Routes, Link } from 'react-router-dom'
import Navigation from './Navigation';
import './styleDash.css'
import { LoginContext } from '../../context/LoginContext';
import { OrdersContext } from '../../context/OrdersContext';

function toggleMenu() {

  // let toggle = document.querySelector('.toggle');
  // let navigation = document.querySelector('.navigation');
  // let main = document.querySelector('.main');
  // toggle.classList.toggle('active')
  // navigation.classList.toggle('active')
  // main.classList.toggle('active')
}





function MyDashboard() {
  const user = JSON.parse(localStorage.getItem("User"))


  const { listusers, setListUsers, getListUsers } = useContext(LoginContext)
  const { getListOrders, listorders, setListOrders, } = useContext(OrdersContext)

  let totalRevenue = 0;

  for (let index = 0; index < listorders.length; index++) {
    totalRevenue += parseFloat(listorders[index].total) ;
  

  }
  console.log("Orders" , listorders)
  


  useEffect(() => {
    getListUsers()
    getListOrders()
  }, [])
  return (
    <div >
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>

      <body>
        <div class="containerr">
          <Navigation></Navigation>

          <div className='mainn'>
            <div className='topbar'>
              <div className='toggle' onClick={toggleMenu} ></div>
              <div className='searchh'>
                <label>
                  <input type="text" placeholder='search here'></input>
                  <i class="fas fa-search"></i>
                </label>

              </div>
              <span className='username'>{user.username}</span>
              <span className='role'>{user.role}</span>
              <div className='user'>
                <img src={user.img || "https://mpng.subpng.com/20180411/rzw/kisspng-user-profile-computer-icons-user-interface-mystique-5aceb0245aa097.2885333015234949483712.jpg"}></img>
              </div>
            </div>

            <div className='cardBox'>
              <div className='cardd'>
                <div>
                  <div className='numbers'>{"1234565".replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                  <div className='cardName'>The number of products</div>
                </div>

                <div className='iconBox'>
                <i class="fab fa-product-hunt"></i>
                </div>
              </div>

              <div className='cardd'>
                <div>
                  <div className='numbers'>{listorders.length}</div>
                  <div className='cardName'>Orders</div>
                </div>

                <div className='iconBox'>
                  <i class="fas fa-shopping-cart"></i>
                </div>
              </div>

              <div className='cardd'>
                <div>
                  <div className='numbers'>{listusers.length}</div>
                  <div className='cardName'>Guest</div>
                </div>

                <div className='iconBox'>
                <i class="fas fa-users"></i>
                </div>
              </div>

              <div className='cardd'>
                <div>
                  <div className='numbers'>{totalRevenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VND</div>
                  <div className='cardName'>Earning</div>
                </div>

                <div className='iconBox'>
                  <i class="fas fa-dollar-sign"></i>
                </div>
              </div>
            </div>

            <div className='details'>
              <div className='recentOrders'>
                <div className='cardHeader'>
                  <h2>Recent Oders</h2>
                  <a href='' className='btn'>View all</a>
                </div>
                <table>
                  <thead>
                    <tr>
                      <td>Orders Name</td>
                      <td>Email</td>
                      <td>Total</td>
                      <td>Status</td>
                    </tr>
                  </thead>
                  <tbody>
                    {listorders && listorders.length > 0  &&
                      listorders.map((item , index) => {
                        const st = item.status.toLowerCase().split(" ").join('')
                        return(
                          <tr>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VND</td>
                          <td><span className={`status ${st || "delivered"}`}>{item.status}</span></td>
                        </tr>
                        )
                      })
                    }
                    
                  </tbody>
                </table>
              </div>

              <div className='recentCustomers'>
                <div className='cardHeader'>
                  <h2>Recent Customers</h2>

                </div>
                <table>
                  <tbody>
                    {listusers && listusers.length && listusers.map((list, index) => {
                      return (
                        <tr>
                          <td width="60px"><div className='imgBx'><img src={list.img || 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg'}></img></div></td>
                          <td><h4>{list.username || "No name"} <br></br><span>{list.date}</span></h4></td>
                        </tr>

                      )
                    })}






                  </tbody>
                </table>
              </div>
            </div>
          </div>


        </div>
      </body>
    </div>
  );
}

export default MyDashboard;
