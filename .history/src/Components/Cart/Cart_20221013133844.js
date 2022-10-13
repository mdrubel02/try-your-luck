import React from 'react';
// import { useState } from 'react';
import './Cart.css';

const Cart = ({ carts, choice, cartsLength }) => {

    // const [cart, setCart]= useState('')

    // const { picture,name } = carts;
    console.log(cartsLength)
    console.log(carts)
    // console.log(cart)
    console.log(choice)
    // let total = 0;

    // for(const cart of carts){
    //     const string= parseFloat(cart.price);
    //     total = string + total;
    // }

    return (
        <div>
            {choice.name?   <div className='cart '>
                            <img className='img p5' src={choice.picture} alt=""></img>
                            <p>{choice.name}</p>
                        </div> : <div>
                {
                    carts.map(cart => <div>
                        <div className='cart '>
                            <img className='img p5' src={cart.picture} alt=""></img>
                            <p>{cart.name}</p>
                        </div>
                    </div>)
                }
            </div>}
        </div>

    );
};

export default Cart;