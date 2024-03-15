// AdminLogin.jsx
import React, { useState } from 'react';
import './AdminLogin.scss';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add login logic here
        if (email === 'admin@example.com' && password === 'password') {
            // Redirect to admin dashboard on successful login
            console.log('Logged in successfully');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="admin-login">
            <h1>Admin Login</h1>
            <form onSubmit={handleSubmit} className="login-form">
                {error && <div className="error-message">{error}</div>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default AdminLogin;
