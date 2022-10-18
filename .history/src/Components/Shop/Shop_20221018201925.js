import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";
import '../Product/Product.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [carts, setCarts] = useState([]);
    const [choice, setChoice] = useState([]);
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
        if (cartsLength === 0) {
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
    const choiceNone = () => {
        const choiceNoneItems = carts[Math.floor(Math.random() * carts.length)]
        setChoice(choiceNoneItems);
        // setCarts(' ')
    }
    const choiceAgin = () => {
        console.log('click')
        // console.log(setCarts(''))
        setChoice([ ])
    }
    return (
        <Container>

            <div className='row gy-5'>
                <div className="col-lg-9 col-md-12">
                    <div className='row gy-3'>
                        {
                            products.map(product => <Product
                                key={product.id}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            ></Product>)
                        }
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 md:order-1 cart-container">
                    <p>select items : {cartsLength}</p>
                    <div className=''>

                        <Cart
                            carts={carts}
                            cartsLength={cartsLength}
                            choice={choice}
                        ></Cart>

                    </div>
                    <div>
                        <button onClick={choiceNone} className="btn btn-primary mb-2">choice one</button> <br />
                        <button onClick={choiceAgin} className='btn btn-primary' >choice agin</button>
                    </div>
                </div>
            </div>

        </Container>
    );
};

export default Shop;