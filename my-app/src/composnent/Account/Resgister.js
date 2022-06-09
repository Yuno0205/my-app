import './cssTest.css'
import React, { useContext } from 'react'
import { LoginContext  } from '../../context/LoginContext';



function Resgister() {
    
    const {setEmail , setPassword ,setUserName, handleLogin ,handleResgister} = useContext(LoginContext)
    
    
    return (
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <body className="img js-fullheight" style={{ backgroundImage: `url("https://i.pinimg.com/originals/7e/25/77/7e25772abb3b97183e2725463066fe01.jpg")` }}>


                <section className="ftco-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 text-center mb-5">
                                <h2 className="heading-section">Resgister </h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-lg-4">
                                <div className="login-wrap p-0">
                                    <h3 className="mb-4 text-center">Fill in your information </h3>
                                    <form  className="signin-form">
                                        <div className="form-group">
                                            <input onChange={e => setEmail(e.target.value)} type="text" name='email' className="form-control" placeholder="Email" required />
                                        </div>
                                        <div className="form-group">
                                            <input onChange={e => setUserName(e.target.value)} type="text" name='username' className="form-control" placeholder="Username" required />
                                        </div>
                                        <div className="form-group">
                                            <input onChange={e => setPassword(e.target.value)} id="password-field" type="password" name='password' className="form-control" placeholder="Password" required />
                                            <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
                                        </div>
                                        <div className="form-group">
                                            <button onClick={handleResgister} type="submit" className="form-control btn btn-primary submit px-3">Resgister</button>

                                        </div>
                                        <div className="form-group d-md-flex">
                                            <div className="w-50">
                                                <label className="checkbox-wrap checkbox-primary">Remember Me
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="w-50 text-md-right">
                                                <a style={{ color: 'white' }} href="#" >Forgot Password</a>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="w-100 text-center">&mdash; Or Sign In With &mdash;</p>
                                    <div className="social d-flex text-center">
                                        <a href="#" className="px-2 py-2 mr-md-1 rounded"><span className="ion-logo-facebook mr-2"></span> Facebook</a>
                                        <a href="#" className="px-2 py-2 ml-md-1 rounded"><span className="ion-logo-twitter mr-2"></span> Twitter</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </body>
        </div>

    );
}

export default Resgister;
