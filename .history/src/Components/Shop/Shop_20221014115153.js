import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([])
    const [carts, setCarts] = useState([]);
    const [choice , setChoice]=  useState([]);
    const [cartsLength, setCartLength] = useState(0);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...carts, product];
        const cartsLength = carts.length + 1;
        if(choice === undefined){
            alert('plz select items')
        }
        if (cartsLength > 4) {
            alert('more then four')
            return;
        }
        else {
            setCarts(newCart);
            setCartLength(cartsLength)
        }
 
    }
    const choiceNone =()=>{
        const choiceNoneItems = carts[Math.floor(Math.random()*carts.length)]
        setChoice(choiceNoneItems);
        // setCarts(' ')
    }
    const choiceAgin = ()=>{
        console.log('click')
        // console.log(setCarts(''))
        setChoice()
    }
    return (
        <Container>
        
            <div className='row'>
                <div className="col-lg-9">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="col-lg-3">
                    <p>select items : {cartsLength}</p>
                    <div className='cart'>
                       
                            <Cart
                                carts={carts}
                                cartsLength={cartsLength}
                                choice={choice}
                            ></Cart>
                        
                    </div>
                    <div>
                        <button onClick={choiceNone} >choice one</button>
                        <button onClick={choiceAgin} >choice agin</button>
                    </div>
                </div>
            </div>
      
        </Container>
    );
};

export default Shop;