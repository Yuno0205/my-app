import { useEffect, useContext } from 'react';
import Navigation from './Navigation';
import './styleDash.css'
import { ProductContext } from '../../context/ProductContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const showForm = () => {
    let modal = document.querySelector('.modal')
    modal.classList.toggle('show')
}


const hiddenForm = () => {
    let modalA = document.querySelector('.modal.show')
    modalA.classList.remove('show')
}








function CategoryDash() {

    const notifyError = () => toast.error("Oops ! Looks like something went wrong!");

    const notifyCate1 = () => toast.success("Successfully added 1 category !");
    const notifyCate2 = () => toast.info("Successfully updated 1 category !");
    const notifyCate3 = () => toast.warn("Successfully deleted 1 category !");

    const { listcategory, getListCategory, onChangeText, onSubmitCreate
        , post, deleteCategory, editCategory, onEdit, selectedPost,
        setSelectedPost, postEdit, setPostEdit } = useContext(ProductContext)

    const onSubmitForm = () => {
        if (post.name && post.description) {
            onSubmitCreate(post)
        }
        showForm()
        getListCategory()
    }

    const onEditCategory = (postEdit) => {

        // if (postEdit.name && postEdit.description) {
        //     editCategory(postEdit)
        //     console.log("Post edit dòng 46 " , postEdit)
        // }

        var _id = postEdit._id
        var name = document.getElementById('namecate').value
        var description = document.getElementById('descate').value

        var dataInfo = {
            _id: _id,
            name: name,
            description: description
        }

        console.log("Data edit", dataInfo)
        if (dataInfo.name == "" || dataInfo.description == "") {
            alert("Please complete all information !")
            return
        } else {
            editCategory(dataInfo)
            hiddenForm()
        }

    }

    const onClickEdit = (post) => {
        showForm()
        onEdit(post)



    }



    useEffect(() => {
        getListCategory()
    }, [])

    return (

        <div >
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>

            <body>
                <div class="containerr">
                    <Navigation></Navigation>

                    <div className='mainn'>
                        <div className='test1'>List category</div>
                        <div className='add__product'>
                            <button onClick={showForm} className='btna'>
                                <a >Add category</a>
                                <i class="far fa-plus-circle"></i>
                            </button>
                        </div>
                        <div className='list'>
                            <table>
                                <thead>
                                    <tr>
                                       
                                        <td className='Btext'>Name</td>
                                        <td className='Btext'>Description</td>
                                        <td className='Btext'>Action</td>

                                    </tr>
                                </thead>
                                <tbody>
                                    {listcategory && listcategory.length && listcategory.map((item, index) => {
                                        return (

                                            <tr key={index}>
                                                
                                                <td >{item.name}</td>
                                                <td >{item.description}</td>
                                                <td>
                                                    <button onClick={() => onClickEdit(item) } className='btnEdit'><i style={{ marginRight: '10px' }} class="fas fa-tools"></i></button>
                                                    <ToastContainer/>
                                                    <button onClick={() => deleteCategory(item._id)} className='btnDelete'> <i class="fas fa-trash"></i></button>
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
                                    <h3 className='auth-form__heading'>Product info</h3>

                                </div>

                                <div className='auth-form__form'>
                                    <div className='auth-form__group'>
                                        <label className='auth-form__label'>Category name</label>
                                        <input id='namecate' value={post.name} onChange={onChangeText} type="text" className='auth-form__input' name='name' placeholder='   Category name'></input>
                                    </div>

                                </div>

                                <div className='auth-form__form'>
                                    <div className='auth-form__group'>
                                        <label className='auth-form__label'>Category description</label>
                                        <input id='descate' value={post.description} onChange={onChangeText} type="text" className='auth-form__input' name='description' placeholder='   Category description'></input>
                                    </div>

                                </div>


                            </div>
                        </div>

                        <div className='auth-form__controls'>
                            <button onClick={hiddenForm} className='btnd auth-form__controls-back'>Hủy</button>
                            {!selectedPost && <button onClick={onSubmitForm} className='btnd btn--primary'>Xác nhận</button>}
                            {selectedPost && <button onClick={() => onEditCategory(postEdit)} className='btnd btn--primary'>Cập nhật</button>}
                        </div>

                    </div>
                </div>



            </body>
        </div>
    );
}

export default CategoryDash;
