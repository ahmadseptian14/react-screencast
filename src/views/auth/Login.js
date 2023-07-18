import React, { useState } from 'react';
import App from '../../layouts/App';
import axios from 'axios'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let credential = {email, password}
    const submitHandler = async (e) => {
        e.preventDefault();
        await axios.get('/sanctum/csrf-cookie')
        await axios.post('/login', credential)
        let { data } = await axios.get('/api/me')
        console.log(data.data);
    };
    return (
        <App title='Login'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='card-header'>Login</div>
                        <div className='card-body'>
                            <form onSubmit={submitHandler}>
                                <div className='mb-3'>
                                    <label
                                        htmlFor='email'
                                        className='form-label'
                                    >
                                        Email
                                    </label>
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type='email'
                                        name='email'
                                        id='email'
                                        className='form-control'
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label
                                        htmlFor='password'
                                        className='form-label'
                                    >
                                        Password
                                    </label>
                                    <input
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type='password'
                                        name='password'
                                        id='password'
                                        className='form-control'
                                    />
                                </div>
                                <button
                                    type='submit'
                                    className='btn btn-primary'
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
}
