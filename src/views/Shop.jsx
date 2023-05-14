import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import Cart from '../views/Cart';

function Shop({user, cart, addToCart, removeFromCart}) {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.log(error));
  }, []);



  const addToCartAPI = async (item) => {
    if (user.apitoken) {
      const res = await fetch('http://127.0.0.1:5000/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${user.apitoken}` },
        body: JSON.stringify(item),
      });
      const data = await res.json();
      console.log(data);
    }
    addToCart(item);
  };



  return (
    <div>
      <h1>Shop</h1>
      <div className='row'>
        <div className='col-8'>
          <div className='row'>
            {products.map(product => (
              <div key={product.id} className='col-6 mb-4'>
                <Product product={product} addToCart={addToCartAPI}/>
              </div>
            ))}
          </div>
        </div>
        <div className='col-4'>
          <Cart cart={cart} user={user} removeFromCart={removeFromCart}/>
        </div>
      </div>
    </div>
  );
}

export default Shop;


