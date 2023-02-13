import React from 'react'
import './product.css'
import Image from './cardimage.png'
function Product() {
    return (
        <div className='first-iteam'>
            <img src={Image} />
            <p> patanjali dant kanti Toothpaste</p>
        
            <h2>Rs. 100/-</h2>
            <br/>
            <button>Add to Cart</button>
        </div>
    )
}

export default Product