import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';


//this is like routes.py lines 17 and 18 route the respective navbar btns to the respective pages
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/signup" element={<SignUpPage />} />
            <Route exact path="/signin" element={<SignInPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}


export default App;
