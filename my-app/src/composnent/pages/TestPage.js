import { useEffect, useContext } from 'react';
import Navigation from './Navigation';
import './styleDash.css'
import { LoginContext } from '../../context/LoginContext';




function TestPage() {

    const { listusers, setListUsers, getListUsers } = useContext(LoginContext)
    

    useEffect(() => {
        getListUsers()
    }, [])
    return (
        <div >
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>

            <body>
                <div class="containerr">
                    <Navigation></Navigation>

                    <div className='mainn'>
                        <div className='test1'>List Users</div>
                        <div className='list'>
                            <table>
                                <thead>
                                    <tr>
                                        <td className='Btext'>Email</td>
                                        <td className='Btext'>Images</td>
                                        <td className='Btext'>Username</td>
                                        <td className='Btext'>Date</td>
                                        <td className='Btext'>Role</td>
                                        

                                    </tr>
                                </thead>
                                <tbody>
                                    {listusers && listusers.length && listusers.map((list, index) => {
                                        return (
                                            <tr key={list._id}>
                                                <td>{list.email}</td>
                                                <td>
                                                    <div className='bxImg'>
                                                        <img src={list.img || "http://windows79.com/wp-content/uploads/2021/02/Thay-the-hinh-dai-dien-tai-khoan-nguoi-dung-mac.png"} ></img>

                                                    </div>
                                                </td>
                                                <td>{list.username || "No name"}</td>
                                                <td>{list.date}</td>

                                                <td><span className='status delivered'>{list.role}</span></td>
                                                

                                            </tr>
                                        )
                                    }
                                    )}




                                </tbody>
                            </table>
                        </div>

                    </div>


                </div>
            </body>
        </div>
    );
}

export default TestPage;
