import React from 'react'
import './styleOD.css'
const NotFound = () => {
    return (
        <div class="container">
            <div class="main">
                <div class="page-loader">
                    <div class="loader">Loading...</div>
                </div>
                <section class="home-section home-parallax home-fade home-full-height bg-dark bg-dark-30" id="homee" >
                    <div class="titan-caption">
                        <div class="caption-content">
                            <div class="font-alt mb-30 titan-title-size-4">Error 404</div>
                            <div class="font-alt">The requested URL was not found on this server.<br />That is all we know.
                            </div>
                            <div class="font-alt mt-30"><a class="btn btn-border-w btn-round" href="/">Back to home page</a></div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default NotFound