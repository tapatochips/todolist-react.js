import React from 'react';
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Login({ logMeIn, user }) {
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;
        const rememberMe = e.target.rememberMe.checked;


        const url = 'http://127.0.0.1:5000/api/login';
        const options = {
            method: "POST",
            headers: {
                Authorization: `Basic ${btoa(username + ":" + password)}`
            }
        };

        const res = await fetch(url, options);
        const data = await res.json();
        if (data.status === 'ok') {
            const myUserInfo = data.data
            logMeIn(myUserInfo, rememberMe)
            navigate('/')
        }

    }

    return user.apitoken ? <Navigate to='/' /> : (
        <div style={{ position: 'absolute', top: '20%', left: '39%', width: '70%'}}>
        <div className='col-4 border p-4'>
          <h1>Log In</h1>
      
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
              <input type="text" className="form-control" id="exampleInputEmail1" name='username' />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" name='password' />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" name="rememberMe" id='rememberMe' />
              <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <p>Don't have an account? <Link className='text-decoration-none' to='/signup'>Sign Up Here</Link></p>
        </div>
      </div>
      

    )
}
