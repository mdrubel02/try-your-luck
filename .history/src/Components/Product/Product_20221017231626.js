import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
    // const {product, handleAddToCart} = props;
    const { name, picture, price, } = product;

    return (
        <div className='col-lg-4'>
          
            <div className="card position-relative" style={{width: '15rem', height: '420px'}}>
                <img src={picture} className="card-img-top" alt="picture" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price: ${price}</p>
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