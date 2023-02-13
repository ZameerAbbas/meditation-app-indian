import React from 'react'
import './product.css'
import Image from './cardimage.png'
import { Link } from 'react-router-dom'
function Product() {
    return (

        <div className='ShopProduct'>
            <Link to="SingleProduct" style={{color:"#25fcf4",textDecoration:"none"}}>
            <img src={Image} />
            <p> patanjali dant kanti Toothpaste</p>
        
            <h2>Rs. 100/-</h2>
            </Link>
            <br/>
            <button>Add to Cart</button>
        </div>
    )
}

export default Product