import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
    // const {product, handleAddToCart} = props;
    const { name, picture, price, } = product;

    return (
        <div className='col-lg-4'>
          
            <div class="card" style={{width: '15rem'}}>
                <img src={picture} class="card-img-top" alt="picture" />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">Price: ${price}</p>
                    <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                        <p className='btn-text px-2'>Add to Cart</p>
                        <span><FontAwesomeIcon className='ml-2' icon={faShoppingCart}></FontAwesomeIcon></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;