import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;


        const url = 'http://127.0.0.1:5000/api/signup';
        const options = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        };

        if (password !== confirmPassword){
            //Throw error msg here.
            return 
        }

        const res = await fetch(url, options);
        const data = await res.json();
        if (data.status === 'ok'){
            //Show success msg
            console.log(data)
        }

    }



    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
          <div style={{ width: '20%' }} className='col-4 border p-4'>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                <input type="text" className="form-control" id="exampleInputEmail1" name='username' />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name='email' />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" name='password' />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" name='confirmPassword' />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <p>Already have an account? <Link className='text-decoration-none' to='/login'>Log In Here</Link></p>
          </div>
        </div>
      );
      
}