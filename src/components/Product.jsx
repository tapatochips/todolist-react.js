import React from 'react'

export default function Product({ product, addToCart}) {
    const p = product



    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={ p.img_url } className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{ p.product_name }</h5>
                <h6 className="card-subtitle">{ p.price }</h6>
                <p className="card-text">{ p.description }</p>
                <button className="btn btn-primary" onClick={()=>{addToCart(p); }}>Add To Cart</button>
            </div>
        </div>
    )
}