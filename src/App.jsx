import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Login from './views/SignInPage';
import SignUp from './views/SignUpPage';
import Shop from './views/Shop';
import Cart from './views/Cart';
import Message from './components/Message';
import { useMessage } from './context/MessageContext';

const getUserFromLocalStorage = () => {
  const found = localStorage.getItem('user115')
  if ( found ) {
    return JSON.parse(found)
  }
  return {}
}

export default function App() {
  const [user, setUser] = useState(getUserFromLocalStorage)
  const [cart, setCart] = useState([])
  const { messages } = useMessage()

  const getTotal = (cart) => {
    let total = 0
    if (Array.isArray(cart)) {
      for (let item of cart) {
        total += parseFloat(item.price)
      }
    }
    return total.toFixed(2)
  }
  
  const addToCart = (item) => {
    setCart([...cart, item])
  };

  const removeFromCart = (item) => {
    const copy = [...cart]
    for (let i = cart.length-1; i>=0; i--){
      if (item.id === cart[i].id){
        copy.splice(i, 1);
        break
      }
    }
    setCart(copy)
  };

  
  
  const getCart = useCallback(async () => {
    if (user.apitoken){
      const res = await fetch('http://127.0.0.1:5000/api/cart', {
        headers: {Authorization: `Bearer ${user.apitoken}`}
      });
      const data = await res.json();
      if (data.status === 'ok'){
        setCart(data.cart)
      }
    }
    else{
      setCart([])
    }
  }, [user.apitoken]);
  
  useEffect(() => {
    getCart();
  }, [getCart]);

  
  
  
  const logMeIn = (user, rememberMe) => {
    //this.setState({user: user})
    setUser(user)
    if (rememberMe) {
      localStorage.setItem('user115', JSON.stringify(user))
    }
  };
  const logMeOut = () => {
    //this.setState({user:{}})
    setUser({})
    localStorage.removeItem('user115')
  };
  //create a function that routes somewhere...

  const showMessages = () => {
    return messages.map(({text, color}, index) => <Message key={index} text={text} color={color} index={index}/>)
  }


  useEffect(()=>{
    //copied from documentation
    const query = new URLSearchParams(window.location.search);

    const copy = [...messages]
    if (query.get('success')) {
        copy.push({
            text: "Order placed! You will receive an email confirmation",
            color: 'success'
        })

    }

    if (query.get('canceled')) {
        copy.push({
            text: "Order canceled. Shop around and checkout when you're ready",
            color: 'warning'
        })     
    }

},[])






  return (
    <div>
      <Navbar user={user} logMeOut={logMeOut} cart={cart} getTotal={getTotal}/>
      { showMessages() }
      <Routes>
        <Route path='/' element={<Shop user={user} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>} />
        <Route path='/login' element={<Login logMeIn={logMeIn} user={user}/>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/shop' element={<Shop user={user} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>} />
        <Route path='/cart' element={<Cart user={user} removeFromCart={removeFromCart} cart={cart}/>} />
      </Routes>
    </div>
  )

}