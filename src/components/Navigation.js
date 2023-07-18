import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-dark border-bottom py-2'>
            <div className='container'>
                <NavLink className='navbar-brand text-white' exact="true" to="/">
                    Screencast
                </NavLink>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon' />
                </button>
                <div
                    className='collapse navbar-collapse'
                    id='navbarSupportedContent'
                >
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <NavLink
                                exact="true"
                                to='/'
                                className='nav-link text-white'
                            >
                                Home
                            </NavLink>
                        </li>
                    </ul>
                    <ul className='navbar-nav mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <NavLink to='/register' className='nav-link text-white'>
                                Register
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/login' className='nav-link text-white'>
                                Login
                            </NavLink>
                        </li>
                        <li className='nav-item dropdown'>
                            <a
                                className='nav-link dropdown-toggle text-white'
                                href='#'
                                id='navbarDropdown'
                                role='button'
                                data-bs-toggle='dropdown'
                                aria-expanded='false'
                            >
                                Account
                            </a>
                            <ul
                                className='dropdown-menu'
                                aria-labelledby='navbarDropdown'
                            >
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <hr className='dropdown-divider' />
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#'>
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
