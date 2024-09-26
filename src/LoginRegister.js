import React, { useState } from 'react';
//import './style.css';
import { useNavigate } from 'react-router-dom';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './firebase';

function LoginRegister() {
    const [isRegister, setIsRegister] = useState(true); // State to toggle between login and register
    const [name, setName] = useState(''); // State for name
    const [email, setEmail] = useState(''); // State for email
    const [password, setPassword] = useState(''); // State for password
    const navigate = useNavigate(); // Hook for navigation

    const handleSwitchContent = () => {
        setIsRegister(!isRegister); // Toggle the registration state
    };

    const handleRegister = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User Registered:', userCredential.user); // Log the user info
            navigate('/'); // Redirect on success
        } catch (error) {
            console.error('Registration error:', error.message); // Log registration error
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('User Logged In:', userCredential.user); // Log the user info
            navigate('/'); // Redirect on success
        } catch (error) {
            console.error('Login error:', error.message); // Log login error
        }
    };

    return (
        <div className={`content justify-content-center align-items-center d-flex shadow-lq ${isRegister ? '' : 'active'}`} id='content'>
            {/*-----------------Register----------------- */}
            {isRegister && (
                <div className='col-md-6 d-flex justify-content-center'>
                    <form onSubmit={handleRegister}>
                        <div className='header-text mb-4'>
                            <h1>Create Account</h1>
                        </div>
                        <div className='input-group mb-3'>
                            <input
                                type='text'
                                placeholder='Name'
                                className='form-control form-control-lg bg-light fs-6'
                                value={name}
                                onChange={(e) => setName(e.target.value)} // Update name state
                                required
                            />
                        </div>
                        <div className='input-group mb-2'>
                            <input
                                type='email'
                                placeholder='Email'
                                className='form-control form-control-lg bg-light fs-6'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Update email state
                                required
                            />
                        </div>
                        <div className='input-group mb-1'>
                            <input
                                type='password'
                                placeholder='Password'
                                className='form-control form-control-lg bg-light fs-6'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // Update password state
                                required
                            />
                        </div>
                        <div className='input-group mb-3 justify-content-center'>
                            <button type='submit' className='btn border-white text-white w-50 fs-6'>Register</button>
                        </div>
                    </form>
                </div>
            )}

            {/*-----------------Login----------------- */}
            {!isRegister && (
                <div className='col-md-6 right-box'>
                    <form onSubmit={handleLogin}>
                        <div className='header-text mb-4'>
                            <h1>Sign In</h1>
                        </div>
                        <div className='input-group mb-2'>
                            <input
                                type='email'
                                placeholder='Email'
                                className='form-control form-control-lg bg-light fs-6'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Update email state
                                required
                            />
                        </div>
                        <div className='input-group mb-1'>
                            <input
                                type='password'
                                placeholder='Password'
                                className='form-control form-control-lg bg-light fs-6'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // Update password state
                                required
                            />
                        </div>
                        <div className='input-group mb-5 d-flex justify-content-center'>
                            <div className='form-check'>
                                <input type='checkbox' className='form-check-input' />
                                <label htmlFor='formcheck' className='form-check-label text-secondary'><small>Remember me</small></label>
                            </div>
                        </div>
                        <div className='input-group mb-3 justify-content-center'>
                            <button type='submit' className='btn border-white text-white w-50 fs-6'>Login</button>
                        </div>
                    </form>
                </div>
            )}

            {/*-------------------------switch panel------------------------- */}
            <div className='switch-content'>
                <div className='switch'>
                    <div className='switch-panel switch-left'>
                        <h1>Hello, Again</h1>
                        <p>We are happy to see you back</p>
                        <button className='hidden btn text-white w-50 fs-6' id='login' onClick={handleSwitchContent}>Login</button>
                    </div>
                    <div className='switch-panel switch-right'>
                        <h1>Welcome</h1>
                        <p>This platform is a unique way for children to get legal literacy</p>
                        <button className='hidden btn border-white text-white w-50 fs-6' id='register' onClick={handleSwitchContent}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginRegister;
