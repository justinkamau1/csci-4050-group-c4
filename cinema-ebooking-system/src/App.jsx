import React from 'react';
import Home from './Home.jsx';
import {Route, Routes} from "react-router-dom";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import MovieDetail from './MovieDetail.jsx';

function App() {
    return (
      <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/movie/:movieId" element={<MovieDetail />} />
        </Routes>
      </>  
    )
}

export default App;