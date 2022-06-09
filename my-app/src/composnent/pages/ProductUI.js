
const ProductUI = () =>{
    return (
      <div id='contentt'>
        <div className="container">
            <div className="card">
                <img src="images/img.png" alt="" className="card__img" />

                <div className="card__content">
                    <div className="card__data">
                        <h1 className="card__title">Nike Air Jordan</h1>
                        <span className="card__preci">$99</span>
                        <p className="card__description">Nike Air Jordan Footwear basketball sneakers.</p>
                        <a href="#" className="card__button">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}

export default ProductUI