import React, { useState, useEffect } from "react";

function Cart({ cart, removeFromCart, user }) {
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const getTotal = () => {
    let total = 0;
    for (let item of cart) {
      let price = item.price;
      total += price;
    }
    return total.toFixed(2);
  };

  const removeFromCartAPI = async (item) => {
    if (user.apitoken) {
      const res = await fetch(`http://127.0.0.1:5000/api/cart/${item.id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${user.apitoken}` },
      });
      const data = await res.json();
      console.log(data);
    }
    removeFromCart(item);
  };

  const generateInputTags = () => {
    return Object.keys(cart).map(key => (key==='size'? <></>: <input key={`input_${key}`} name={cart[key].default_price} defaultValue={cart[key].qty} hidden />))
  };

  return (
    <div className="cart">
      <button onClick={openCart}>View Cart ({cart.length})</button>
      {isCartOpen && (
        <div className="cart__overlay">
          <div className="cart__items">
            <button onClick={closeCart}>Close</button>
            <h3>Cart</h3>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.name} ({item.quantity}) - $
                  {parseFloat(item.price).toFixed(2)}
                  
                  <button onClick={() => removeFromCartAPI(item)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div>Total: ${getTotal()}</div>
          </div>
          <form action="http://127.0.0.1:5000/api/create-checkout-session" method="POST">
          {generateInputTags()}
            <button type="submit">Checkout</button>
          </form>
        </div>
      )}
    </div>
  );
}



export default Cart;
