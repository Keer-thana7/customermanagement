import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import Logo from './Logo.png';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.get('https://6672a8fd6ca902ae11b13670.mockapi.io/login');
            const users = response.data;
            const user = users.find(user => user.userHandle === username && user.password === password);

            if (user) {
                console.log('Login successful:', user);
                setUsername('');
                setPassword('');
                navigate('/customerApp');
            } else {
                setError('Invalid credentials');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <div className='logo'>
                <img src={Logo} alt="logo" />
            </div>
            <div className="login-box">
                <p className="login-title">Merchant Login</p>
                <p>Enter your account details</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            placeholder='Enter'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            placeholder='Enter'
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                <div className="forgot-password">
                    <a href="/forgot-password">Forgot Password?</a>
                </div>
                    {error && <div className="error">{error}</div>}
                    <button type="submit" className="login-button">Login</button>
                </form>
                <div className="signup-link">
                    Not a Merchant yet? <Link to="/register">Sign up Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
