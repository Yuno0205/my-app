import { useEffect, useContext } from 'react';
import Navigation from './Navigation';
import './styleDash.css'
import { OrdersContext } from '../../context/OrdersContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const addProduct = () => {
    let modal = document.querySelector('.modal')
    modal.classList.toggle('show')
}


const hiddenForm = () => {
    let modalA = document.querySelector('.modal.show')
    modalA.classList.remove('show')
}



function OrdersDash() {

    const { listorders, setListOrders, getListOrders, postOrders, setPostOrders, changeOrdersStatus } = useContext(OrdersContext)
    

    const onClickEdit = (post) => {
        addProduct()




        setPostOrders(post)
        console.log("Your selection", postOrders)

    }



    const onEditProduct = (post) => {
        if (!post) {
            alert("No have orders info")
            return
        } else {
            var inputData = document.getElementsByTagName('input')

            var status1 = inputData[0].checked
            var status2 = inputData[1].checked
            var status3 = inputData[2].checked
            var status4 = inputData[3].checked

            var statuss = ""
            console.log("Index", statuss)

            if (status1) {
                statuss = "Pending"
            } else if (status2) {
                statuss = "In Progress"
            }
            else if (status3) {
                statuss = "Delivered"
            } else {
                statuss = "Retured"
            }


            post.status = statuss

            console.log("Now", statuss)

            console.log("Status ", post.status)

            console.log("Post nề : ", post)


           
            
            setPostOrders(post)
            changeOrdersStatus(post)
            hiddenForm()
        }

    }





    useEffect(() => {
        getListOrders()

    }, [])



    return (

        <div >
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>

            <body>
            <ToastContainer/>
                <div class="containerr">
                    <Navigation></Navigation>

                    <div className='mainn'>
                        <div className='test1'>List orders</div>
                        <div className='add__product'>
                            <button className='btna'>
                                <a >Infomation</a>
                                <i class="far fa-plus-circle"></i>
                            </button>
                        </div>


                        <div className='list'>
                            <table>
                                <thead>
                                    <tr>

                                        <td className='Btext'>Orders name</td>
                                        <td className='Btext'>Customer</td>
                                        <td className='Btext'>Phone</td>
                                        <td className='Btext'>Email</td>
                                        <td className='Btext'>Status</td>
                                        <td className='Btext'>Action</td>

                                    </tr>
                                </thead>
                                <tbody>
                                    {listorders && listorders.length && listorders.map((item, index) => {
                                        const st = item.status.toLowerCase().split(" ").join('')
                                        return (
                                            <tr >
                                                <td>
                                                    <div className='bxImg'>

                                                        <span>{item.name}</span>
                                                    </div>
                                                </td>
                                                <td>{item.customer}đ</td>
                                                <td>{item.phone || "No"} </td>
                                                <td>{item.email + ','}</td>
                                                <td><span className={`status ${st || "delivered"}`}>{item.status || "No"}</span></td>
                                                <td>
                                                    <i onClick={() => onClickEdit(item)} style={{ marginRight: '10px' }} class="fas fa-tools"></i>
                                                    <i class="fas fa-info-circle"></i>
                                                </td>

                                            </tr>

                                        )
                                    })}


                                </tbody>
                            </table>

                        </div>

                    </div>


                </div>

                {/* Modal layout */}

                <div className='modal'>
                    <div className='modal__overlay'>

                    </div>
                    <div className='modal__body'>

                        <div className='auth-form'>
                            <div className='auth-form__container'>
                                <div className='auth-form__header'>
                                    <h3 className='auth-form__heading'>Status</h3>

                                </div>







                                <div className='auth-form__form'>
                                    <div className='auth-form__group'>
                                        <label className='auth-form__label'>Status orders</label>
                                        <div className='auth-form__radio'>
                                            <input type="radio" id="html" name="status" />
                                            <label for="html">Pending</label><br />
                                            <input type="radio" id="css" name="status" value="CSS" />
                                            <label for="css">In progress</label><br />
                                            <input type="radio" id="javascript" name="status" value="JavaScript" />
                                            <label for="javascript">Delivered</label>
                                            <input type="radio" id="javascript" name="status" value="JavaScript" />
                                            <label for="javascript">Retured</label>
                                        </div>
                                    </div>

                                </div>




                            </div>
                        </div>

                        <div className='auth-form__controls'>
                            <button onClick={hiddenForm} className='btnd auth-form__controls-back'>Hủy</button>
                            <button onClick={() => onEditProduct(postOrders)} className='btnd btn--primary'>Cập nhật</button>
                             
                        </div>

                    </div>
                </div>
            </body>
        </div>
    );
}

export default OrdersDash;
