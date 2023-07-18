import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/auth/Login';
import Register from '../views/auth/Register';

export default function ReactRouter() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} exact />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
