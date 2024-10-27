import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [isRegistering, setIsRegistering] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = isRegistering
            ? `${process.env.REACT_APP_BACKEND_URL}/auth/register`
            : `${process.env.REACT_APP_BACKEND_URL}/auth/login`;

        const method = isRegistering ? 'POST' : 'POST';

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                onLogin();
            } else {
                alert(data.message || 'An error occurred');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during the request');
        }
    };

    return (
        <div>
            <h2>{isRegistering ? 'Register' : 'Login'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type='submit'>
                    {isRegistering ? 'Register' : 'Login'}
                </button>
            </form>
            <p onClick={() => setIsRegistering(!isRegistering)}>
                {isRegistering
                    ? 'Already have an account? Login'
                    : 'Need an account? Register'}
            </p>
        </div>
    );
};

export default Login;
