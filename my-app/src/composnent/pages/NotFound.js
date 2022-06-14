import React from 'react'
import { Link } from 'react-router-dom'
import './styleOD.css'
const NotFound = () => {
    return (
        <div>
            <section class="page_404">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="col-sm-10 col-sm-offset-1 text-center">
                                <div class="four_zero_four_bg">
                                    <h1 class="text-center">404</h1>
                                </div>
                                <div class="content_box_404">
                                    <h3 class="h2">Looks Like You're Lost</h3>
                                    <p>The page you are looking for not available</p>
                                    <p>Sorry for this problem, we will fix it as soon as possible :(  </p>
                                    <Link to="/">Go to Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NotFound